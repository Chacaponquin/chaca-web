import { usePlayground } from "@modules/datasets/hooks"
import { useEffect, useState } from "react"
import { Form, FormatOptions } from "../interfaces"
import { ExportImageFunc } from "@modules/modal/interfaces"
import { EmptyFilenameError } from "@modules/config/exceptions"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { Validator } from "@modules/app/domain"
import { ImageFilenameValidator } from "@modules/config/domain/validators"

interface Props {
  next: ExportImageFunc
}

export default function useExportImage({ next }: Props) {
  const { toastError } = useToast()

  const { EMPTY_ERROR } = useTranslation({
    EMPTY_ERROR: {
      en: "You must insert a name for the file",
      es: "Debes insertar un nombre para el archivo",
    },
  })

  const { handleGenerateImage } = usePlayground()

  const [showImage, setShowImage] = useState("")

  const [form, setForm] = useState<Form>({ name: "", format: "svg" })

  const formats: FormatOptions[] = [
    { format: "svg", name: "SVG" },
    { format: "png", name: "PNG" },
  ]

  useEffect(() => {
    handleGenerateImage({
      format: "png",
      success(img) {
        setShowImage(img)
      },
    })
  }, [])

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }))
  }

  function handleChangeFormat(name: string) {
    const found = formats.find((f) => f.name === name)

    if (found) {
      setForm((prev) => ({ ...prev, format: found.format }))
    }
  }

  const foundFormat = formats.find((f) => f.format === form.format)

  function handleNext() {
    const validator = new Validator([new ImageFilenameValidator({ name: form.name })])

    validator.execute({
      success() {
        next({
          filename: form.name,
          format: form.format,
        })
      },
      error(error) {
        if (error instanceof EmptyFilenameError) {
          toastError({ id: "empty-image-filename", message: EMPTY_ERROR })
        }
      },
    })
  }

  return { handleNext, showImage, form, handleChangeName, handleChangeFormat, formats, foundFormat }
}

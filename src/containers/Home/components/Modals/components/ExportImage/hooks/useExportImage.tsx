import { useEffect, useMemo, useState } from "react"
import { Form, FormatOptions } from "../interfaces"
import { useToast } from "@modules/app/modules/toast/hooks"
import { ExportDatasetImageValidator } from "@modules/config/domain/validators"
import { usePlayground } from "@modules/playground/hooks"
import { useModal } from "@modules/modal/hooks"
import { ExportImageProps } from "@containers/Home/domain/props"

interface Props {
  handleExportImage(props: ExportImageProps): void
}

export default function useExportImage({ handleExportImage }: Props) {
  const { toastChacaError } = useToast()
  const { handleCloseModal } = useModal()

  const { handleGenerateImage } = usePlayground()

  const [showImage, setShowImage] = useState("")

  const [form, setForm] = useState<Form>({ name: "", format: "png" })

  const formats: FormatOptions[] = useMemo(() => {
    return [
      { format: "png", name: "PNG" },
      { format: "svg", name: "SVG" },
    ]
  }, [])

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
    const validator = new ExportDatasetImageValidator({ name: form.name })

    validator.execute({
      success() {
        handleExportImage({
          filename: form.name,
          format: form.format,
        })

        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { handleNext, showImage, form, handleChangeName, handleChangeFormat, formats, foundFormat }
}

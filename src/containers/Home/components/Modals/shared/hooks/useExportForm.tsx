import { useConfig } from "@modules/config/hooks"
import { useState } from "react"
import { ExportDatasetForm } from "../domain/export-dataset"
import { FileConfigOption } from "@modules/config/domain/core"

interface ChangeFileArgumentsProps {
  field: string
  value: unknown
}

export default function useExportForm() {
  const { fileOptions } = useConfig()

  const [form, setForm] = useState<ExportDatasetForm>({
    file: { name: "", type: fileOptions[0], arguments: {} },
  })

  function handleChangeFileType(type: FileConfigOption) {
    setForm((prev) => ({
      ...prev,
      file: {
        ...prev.file,
        type: type,
        arguments: {},
      },
    }))
  }

  function handleChangeName(name: string) {
    setForm((prev) => {
      return {
        ...prev,
        file: {
          ...prev.file,
          name: name,
        },
      }
    })
  }

  function handleChangeFileArguments({ field, value }: ChangeFileArgumentsProps) {
    setForm((prev) => {
      return {
        ...prev,
        file: {
          ...prev.file,
          type: prev.file.type,
          arguments: { ...prev.file.arguments, [field]: value },
        },
      }
    })
  }

  return {
    form,
    handleChangeFileType,
    handleChangeFileArguments,
    handleChangeName,
  }
}

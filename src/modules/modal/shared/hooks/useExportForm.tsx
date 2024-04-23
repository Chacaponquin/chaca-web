import { useConfig } from "@modules/config/hooks"
import { Config } from "@modules/config/interfaces"
import { useState } from "react"

interface ChangeFileArgumentsProps {
  field: string
  value: unknown
}

export default function useExportForm() {
  const { fileOptions } = useConfig()

  const [form, setForm] = useState<Config>({
    file: { fileType: fileOptions[0].fileType, arguments: {} },
    saveSchema: null,
  })

  function handleChangeFileType(type: string) {
    setForm((prev) => ({
      ...prev,
      file: {
        fileType: type,
        arguments: {},
      },
    }))
  }

  function handleChangeFileArguments({ field, value }: ChangeFileArgumentsProps) {
    setForm((prev) => {
      return {
        ...prev,
        file: {
          fileType: prev.file.fileType,
          arguments: { ...prev.file.arguments, [field]: value },
        },
      }
    })
  }

  return { form, handleChangeFileType, handleChangeFileArguments }
}

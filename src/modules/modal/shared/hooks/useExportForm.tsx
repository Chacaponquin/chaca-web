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
    file: { name: "", type: fileOptions[0].id, arguments: {} },
    saveSchema: null,
  })

  function handleChangeFileType(type: string) {
    setForm((prev) => ({
      ...prev,
      file: {
        ...prev.file,
        type: type,
        arguments: {},
      },
    }))
  }

  function handleChangeName(n: string) {
    setForm((prev) => {
      return {
        ...prev,
        file: {
          ...prev.file,
          name: n,
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

  return { form, handleChangeFileType, handleChangeFileArguments, handleChangeName }
}

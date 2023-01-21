import { EmptyFormFieldError, RepeatTagError } from "@modules/config/errors"
import { SaveSchemaForm } from "@modules/config/interfaces/config.iterface"
import { configServices } from "@modules/config/services"
import { useState } from "react"
import { toast } from "react-toastify"

export function useFormContent() {
  const { updateSaveSchemaForm } = configServices()
  const [newTag, setNewTag] = useState("")

  const handleChangeNewTag = (tag: string) => {
    setNewTag(tag)
  }

  const handleChangeFormValue = (key: keyof SaveSchemaForm, value: string) => {
    try {
      updateSaveSchemaForm(key, value)
    } catch (error) {
      if (error instanceof EmptyFormFieldError)
        toast.error(`The new tag can not be an empty string`)
      else if (error instanceof RepeatTagError) toast.error(`The tag '${error.tag}' already exists`)
    }
  }

  const handleAddNewTag = () => {
    handleChangeFormValue("tags", newTag)
    setNewTag("")
  }

  return { handleAddNewTag, handleChangeFormValue, handleChangeNewTag, newTag }
}

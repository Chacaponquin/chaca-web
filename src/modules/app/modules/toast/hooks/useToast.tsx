import { useContext } from "react"
import { ToastContext } from "../context"
import { ChacaError } from "@modules/app/exceptions"
import { useLanguage } from "../../language/hooks"

export default function useToast() {
  const { language } = useLanguage()
  const { toastError, toastSuccess } = useContext(ToastContext)

  function toastChacaError(error: ChacaError) {
    toastError({ message: error.getMessage(language), id: error.id })
  }

  return { toastError, toastSuccess, toastChacaError }
}

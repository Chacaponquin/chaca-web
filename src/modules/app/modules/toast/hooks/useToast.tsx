import { useContext } from "react"
import { ToastContext } from "../context"

export default function useToast() {
  const { toastError, toastSuccess } = useContext(ToastContext)

  return { toastError, toastSuccess }
}

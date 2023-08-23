import { useContext } from "react"
import { ToastContext } from "../context"

export default function useToastServices() {
  const { toastError, toastSuccess } = useContext(ToastContext)

  return { toastError, toastSuccess }
}

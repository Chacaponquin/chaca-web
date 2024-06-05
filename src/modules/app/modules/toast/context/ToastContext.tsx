import { createContext } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Props {
  toastSuccess(m: ShowToastProps): void
  toastError(m: ShowToastProps): void
}

type ShowToastProps = { message: string; id: string }

export const ToastContext = createContext<Props>({} as Props)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  function toastSuccess({ message, id }: ShowToastProps) {
    toast.success(message, { toastId: `toast-${id}` })
  }

  function toastError({ message, id }: ShowToastProps) {
    toast.error(message, { toastId: `toast-${id}` })
  }

  return (
    <ToastContext.Provider value={{ toastError, toastSuccess }}>
      <ToastContainer autoClose={false} hideProgressBar={true} />
      {children}
    </ToastContext.Provider>
  )
}

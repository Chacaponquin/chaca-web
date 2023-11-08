import { createContext, Fragment } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Props {
  toastSuccess(m: ShowToastProps): void
  toastError(m: ShowToastProps): void
}

type ShowToastProps = { message: string; id?: string }

const ToastContext = createContext<Props>({} as Props)

const ToastProvider = ({ children }: { children: React.ReactElement }) => {
  function toastSuccess({ message, id = "success" }: ShowToastProps) {
    toast.success(message, { toastId: `toast-${id}` })
  }

  function toastError({ message, id = "error" }: ShowToastProps) {
    toast.error(message, { toastId: `toast-${id}` })
  }

  return (
    <ToastContext.Provider value={{ toastError, toastSuccess }}>
      <Fragment>
        <ToastContainer autoClose={5000} hideProgressBar={true} />
        {children}
      </Fragment>
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }

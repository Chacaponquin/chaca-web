import { createContext, Fragment } from "react"
import { toast, ToastContainer } from "react-toastify"

interface ToastContextProps {
  toastSuccess(m: string): void
  toastError(m: string): void
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps)

const ToastProvider = ({ children }: { children: React.ReactElement }) => {
  function toastSuccess(message: string) {
    toast.success(message, { toastId: "toast-success" })
  }

  function toastError(message: string) {
    toast.error(message, { toastId: "toast-error" })
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

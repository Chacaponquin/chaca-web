import { ErrorInfo, ReactNode, Component } from "react"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = {
    hasError: false,
  }

  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Uncaught error:`, error, errorInfo)
  }

  private resetError() {
    this.setState({ hasError: false })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className='w-screen flex h-screen items-center justify-center bg-third-bg bg-cover bg-no-repeat px-4'>
          <div className='md:h-[600px] flex flex-col-reverse xl:flex-row xl:gap-10 xl:justify-between shadow-lg rounded bg-white xl:py-4 py-10 px-14 esm:px-10 items-center'>
            <div className='flex flex-col max-w-[500px] gap-5 esm:gap-2'>
              <h1 className='font-fontExtraBold text-5xl esm:text-3xl'>Something went wrong</h1>

              <p className='text-slate-500 text-lg esm:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis accusamus quisquam
                ipsum id corrupti, illum placeat natus veniam autem assumenda adipisci culpa magnam.
              </p>
            </div>

            <div>
              <img
                src='./images/error.jpg'
                alt=''
                className='md:w-[600px] w-[450px] object-cover esm:w-[350px] min-w-[270px]'
              />
            </div>
          </div>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary

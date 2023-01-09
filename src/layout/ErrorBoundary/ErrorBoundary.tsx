import React, { ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Uncaught error:`, error, errorInfo);
  }

  private resetError() {
    this.setState({ hasError: false });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="w-screen flex h-screen items-center justify-center bg-white">
          Something went wrong
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

import React, { PropsWithChildren } from 'react'

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  { hasError: boolean }
> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Message />
    }

    return this.props.children
  }
}

const Message = () => <h1>Houve um erro ao carregar o MFE</h1>

export default Message

import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

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

const Message = () => <Title>There was an error loading the remote</Title>

const Title = styled.h3`
  color: #ee4b2b;
`

export default Message

import { Component, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    isError: boolean
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { isError: false }
    }

    componentDidCatch(_error: Error, errorInfo: ErrorInfo): void {
        console.log(errorInfo)
        this.setState({ isError: true })
    }

    render() {
        var { isError } = this.state
        var { children } = this.props

        if (isError) {
            return <PageError />
        }

        return children
    }
}

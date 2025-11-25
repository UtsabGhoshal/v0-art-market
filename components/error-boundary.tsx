"use client"

import { Component, type ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-md mx-auto px-4 py-12">
          <Card className="p-8 border-red-200 bg-red-50">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="text-red-600" size={32} />
              <h2 className="text-2xl font-bold text-red-900">Something went wrong</h2>
            </div>
            <p className="text-red-800 mb-6">
              We encountered an unexpected error. Please try refreshing the page or contact support.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => window.location.reload()} className="bg-red-600 hover:bg-red-700 text-white">
                Refresh Page
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Go Home
              </Button>
            </div>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

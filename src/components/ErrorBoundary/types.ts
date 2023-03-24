import { ReactNode } from "react";

export interface ErrorBoundaryProps {
 errorContent: ReactNode
 children: ReactNode
}

export interface ErrorBoundaryState {
 hasError: boolean
}
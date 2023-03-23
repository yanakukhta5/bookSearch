import { HTMLProps, ReactNode } from 'react'

interface DropdownOption {
 content: ReactNode
}

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
 title: string
 options: Array<DropdownOption>
}
import { ReactNode } from 'react'

export type FieldProps = {
    variant?: string
    children: ReactNode
}

export type LabelProps = {
    text: string
    htmlFor: string
}

export type InputProps = {
    name: string
    register: () => {}
    type?: string
    validation?: Validation
}

export type ButtonProps = {
    text: string
    handleClick: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
}

export type Validation = {
    required?: boolean
    min?: number
    max?: number
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    validate?: () => boolean
}

import { ComponentProps } from 'react'

export type InputProps = {
  label?: string
  helperText?: string
  errorMessage?: string
} & ComponentProps<'input'>

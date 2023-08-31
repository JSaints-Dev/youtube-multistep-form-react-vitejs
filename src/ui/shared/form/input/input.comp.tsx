import { forwardRef } from 'react'

import { InputProps } from './input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorMessage, ...rest }, ref) => {
    return (
      <div
        data-helper-text={!!helperText || !!errorMessage}
        className="mb-4 flex w-full flex-col gap-1 data-[helper-text=true]:mb-0"
      >
        {label && <label className="text-secondary">{label}</label>}
        <input
          className="h-10 rounded-md p-3 text-sm text-dark placeholder:text-primary"
          {...rest}
          ref={ref}
        />
        {errorMessage && (
          <p className="text-xs italic text-accent">{errorMessage}</p>
        )}
        {!errorMessage && helperText && (
          <p className="text-xs text-primary">{helperText}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

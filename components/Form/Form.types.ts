import React, { ReactNode } from 'react'
import { Resolver, FieldValues, DefaultValues } from 'react-hook-form'

export interface FormProps<TFieldValues extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  defaultValues?: DefaultValues<TFieldValues>
  shouldReset?: boolean
  resolver?: Resolver<TFieldValues>
  children: ReactNode
  className?: string
  onSubmit?: (data: TFieldValues) => void
}

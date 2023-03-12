import { ReactElement } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

export interface ConnectFormProps<TFieldValues extends FieldValues> {
  children(children: UseFormReturn<TFieldValues>): ReactElement
}

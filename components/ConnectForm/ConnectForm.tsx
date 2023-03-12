import { useFormContext, FieldValues } from 'react-hook-form'
import { ConnectFormProps } from './ConnectForm.types'

const ConnectForm = <TFieldValues extends FieldValues>({
  children,
}: ConnectFormProps<TFieldValues>) => {
  const methods = useFormContext<TFieldValues>()

  return children({ ...methods })
}

export default ConnectForm

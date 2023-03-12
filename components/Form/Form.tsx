import React, { forwardRef, useEffect } from 'react'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form'
import { FormProps } from './Form.types'

const Form = forwardRef(
  <TFieldValues extends FieldValues>(
    {
      defaultValues,
      shouldReset,
      resolver,
      className,
      onSubmit,
      ...rest
    }: FormProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLFormElement>
  ) => {
    const methods = useForm<TFieldValues>({ defaultValues, resolver })
    const {
      reset,
      handleSubmit,
      formState: { isSubmitting },
    } = methods

    useEffect(() => {
      if (shouldReset) {
        reset(defaultValues)
      }
    }, [shouldReset, defaultValues, reset])

    const handleSubmitForm = (event: React.BaseSyntheticEvent) => {
      event.preventDefault()

      if (isSubmitting) return

      handleSubmit(onSubmit as SubmitHandler<TFieldValues>)()
    }

    return (
      <FormProvider {...methods}>
        <form
          className={className}
          onSubmit={onSubmit && handleSubmitForm}
          ref={ref}
          {...rest}
        />
      </FormProvider>
    )
  }
)

Form.displayName = 'Form'

export default Form

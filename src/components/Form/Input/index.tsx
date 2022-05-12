import { Fieldset, InputForm } from './styles'

interface InputProps {
  field: string
  placeholder: string
}

export function Input({ field, placeholder }: InputProps) {
  return (
    <Fieldset>
      <legend>{field}</legend>
      <InputForm placeholder={placeholder} />
    </Fieldset>
  )
}

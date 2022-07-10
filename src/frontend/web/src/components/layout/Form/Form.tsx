import { FormEventHandler } from "react"

import Button from "@layout/Button"

interface FormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>
  errorMessage: string
  children: React.ReactNode
  disabled?: boolean
}

function Form({ handleSubmit, errorMessage, children, disabled = false }: FormProps): JSX.Element {
  return (
    <form className="form-control space-y-[var(--separator-big)]" onSubmit={handleSubmit}>
      {children}
      {errorMessage ? <div className="alert alert-error flex justify-center">{errorMessage}</div> : null}
      {disabled ? null : <Button>Confirmar</Button>}
    </form>
  )
}

export default Form

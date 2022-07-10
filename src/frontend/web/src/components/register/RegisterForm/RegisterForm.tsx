import cookieCutter from "cookie-cutter"
import { FormEvent, useState } from "react"

import { Profile, useProfileContext } from "@contexts/ProfileContext"

import Form from "@layout/Form"

import { login } from "@api/login"
import { register } from "@api/register"

interface RegisterFormProps {
  successCallback: CallableFunction
}

function RegisterForm({ successCallback: parentSuccessCallback }: RegisterFormProps): JSX.Element {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { setProfile } = useProfileContext()

  const loginSuccessCallback = (accessToken: string) => {
    setProfile({ email } as Profile)
    cookieCutter.set("access_token", accessToken)
  }

  const successCallback = () => {
    setEmail("")
    setPassword("")
    setErrorMessage("")

    login(email, password, loginSuccessCallback, setErrorMessage).catch(() => {
      setErrorMessage("Ha ocurrido un error")
    })

    parentSuccessCallback()
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    register(email, password, successCallback, setErrorMessage).catch(() => {
      setErrorMessage("Ha ocurrido un error")
    })
  }

  return (
    <Form handleSubmit={handleSubmit} errorMessage={errorMessage}>
      <label className="py-0 m-0 label">
        Email
        <input
          className="w-2/3 input input-primary"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label className="py-0 m-0 label">
        Contraseña
        <input
          className="w-2/3 input input-primary"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
    </Form>
  )
}

export default RegisterForm

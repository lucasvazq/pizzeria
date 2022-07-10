import cookieCutter from "cookie-cutter"
import { FormEvent, useState } from "react"

import { Profile, useProfileContext } from "@contexts/ProfileContext"

import Form from "@layout/Form"

import { login } from "@api/login"

interface LoginFormProps {
  successCallback: CallableFunction
}

function LoginForm({ successCallback: parentSuccessCallback }: LoginFormProps): JSX.Element {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { setProfile } = useProfileContext()

  const successCallback = (accessToken: string) => {
    setEmail("")
    setPassword("")
    setErrorMessage("")
    setProfile({ email } as Profile)
    cookieCutter.set("access_token", accessToken)
    parentSuccessCallback()
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    login(email, password, successCallback, setErrorMessage).catch(() => {
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

export default LoginForm

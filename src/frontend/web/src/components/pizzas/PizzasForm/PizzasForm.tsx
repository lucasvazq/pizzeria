import cookieCutter from "cookie-cutter"
import { FormEvent, useState } from "react"

import { usePizzasContext } from "@contexts/PizzasContext"
import { ProfileConsumer } from "@contexts/ProfileContext"

import Form from "@layout/Form"

import { addPizza, getPizzas } from "@api/pizzas"

function PizzasForm(): JSX.Element {
  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { setPizzas } = usePizzasContext()

  const successCallback = () => {
    setName("")
    setPrice("")
    setErrorMessage("")

    getPizzas()
      .then((result) => {
        setPizzas(result)
      })
      .catch(() => setErrorMessage("Ha ocurrido un error"))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addPizza(name, price, successCallback, setErrorMessage, cookieCutter.get("access_token") as string).catch(() => {
      setErrorMessage("Ha ocurrido un error")
    })
  }

  return (
    <div className="border-neutral-content border-2 p-[var(--separator-big)] rounded-lg">
      <ProfileConsumer>
        {({ profile }) => (
          <Form handleSubmit={handleSubmit} errorMessage={errorMessage} disabled={!profile}>
            <label className="label py-0 m-0">
              Nombre
              <input
                className="input input-neutral-content border-neutral-content border-2 w-2/3 bg-neutral"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={!profile}
                required
              />
            </label>
            <label className="label py-0 m-0">
              Precio
              <input
                className="input input-neutral-content border-neutral-content border-2 w-2/3 bg-neutral"
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                disabled={!profile}
                min="1"
                max="9999"
                required
              />
            </label>
            {profile ? null : (
              <div className="alert alert-warning flex justify-center">Ingresar para poder agregar una nueva pizza</div>
            )}
          </Form>
        )}
      </ProfileConsumer>
    </div>
  )
}

export default PizzasForm

import { Pizza } from "@contexts/PizzasContext"

import { ErrorResponse, get, post } from "@api/api"

const getPizzas = async (isBackend?: boolean): Promise<Pizza[]> => {
  const response = await get(
    isBackend ? `http://${process.env.BACKEND_PIZZAS_HOST}` : "http://localhost:8002",
    "v1",
    "pizzas"
  )
  if (response.status === 200) {
    return (await response.json()) as Pizza[]
  }
  return []
}

const addPizza = async (
  name: string,
  price: string,
  successCallback: CallableFunction,
  errorCallback: CallableFunction,
  accessToken: string
) => {
  await post(
    "http://localhost:8002",
    "v1",
    "pizzas",
    JSON.stringify({
      name,
      price,
    }),
    accessToken
  ).then(async (response) => {
    if (response.status === 201) {
      successCallback()
    } else {
      await response.json().then((error) => {
        const errorMessage = (error as ErrorResponse).detail
        if (typeof errorMessage === "string") {
          errorCallback(errorMessage)
        } else {
          errorCallback("Ha ocurrido un error")
        }
      })
    }
  })
}

export { getPizzas, addPizza }

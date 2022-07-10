import { post, ErrorResponse } from "@api/api"

const register = async (
  email: string,
  password: string,
  successCallback: CallableFunction,
  errorCallback: CallableFunction
) => {
  await post(
    "http://localhost:8001",
    "v1",
    "user/register",
    JSON.stringify({
      email,
      password,
    })
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

export { register } // eslint-disable-line import/prefer-default-export

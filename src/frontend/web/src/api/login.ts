import { post, ErrorResponse } from "@api/api"

interface LoginSuccessResult {
  access_token: string
}

const login = async (
  email: string,
  password: string,
  successCallback: CallableFunction,
  errorCallback: CallableFunction
) => {
  await post(
    "http://localhost:8001",
    "v1",
    "user/login",
    JSON.stringify({
      email,
      password,
    })
  ).then(async (response) => {
    if (response.status === 200) {
      await response.json().then((result) => {
        successCallback((result as LoginSuccessResult).access_token)
      })
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

export { login } // eslint-disable-line import/prefer-default-export

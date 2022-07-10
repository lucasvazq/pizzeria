interface ErrorResponse {
  detail: string | object[]
}

const getApiURL = (api_domain: string, api_version: string, api_resource_path: string) =>
  `${api_domain}/api/${api_version}/${api_resource_path}`

const get = async (api_domain: string, api_version: string, api_resource_path: string, accessToken?: string) =>
  fetch(getApiURL(api_domain, api_version, api_resource_path), {
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  })

const post = async (
  api_domain: string,
  api_version: string,
  api_resource_path: string,
  body: string,
  accessToken?: string
) =>
  fetch(getApiURL(api_domain, api_version, api_resource_path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body,
  })

export { get, post, type ErrorResponse }

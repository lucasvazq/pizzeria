import { Profile } from "@contexts/ProfileContext"

import { get } from "@api/api"

const getProfile = async (accessToken?: string, isBackend?: boolean): Promise<Profile | null> => {
  const response = await get(
    isBackend ? `http://${process.env.BACKEND_USERS_HOST}` : "http://localhost:8001",
    "v1",
    "user/profile",
    accessToken
  )
  if (response.status === 200) {
    return (await response.json()) as Profile
  }
  return null
}

export { getProfile } // eslint-disable-line import/prefer-default-export

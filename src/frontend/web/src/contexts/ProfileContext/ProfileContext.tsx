import { createContext, useContext, useMemo, useState, Dispatch, SetStateAction } from "react"

interface Profile {
  email: string
}

interface ProfileContextProps {
  profile: Profile | null
  setProfile: Dispatch<SetStateAction<Profile | null>>
}

const ProfileContext = createContext<ProfileContextProps>({
  profile: null,
  setProfile: (prevState: SetStateAction<Profile | null>) => prevState,
})

interface ProfileProviderProps {
  initialProfile: Profile | null
  children: React.ReactNode
}

function ProfileProvider({ initialProfile, children }: ProfileProviderProps): JSX.Element {
  const [profile, setProfile] = useState<Profile | null>(initialProfile)

  const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile])

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

const ProfileConsumer = ProfileContext.Consumer

const useProfileContext = () => useContext(ProfileContext)

export { type Profile, ProfileProvider, ProfileConsumer, useProfileContext }

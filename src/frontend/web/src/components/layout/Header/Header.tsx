import cookieCutter from "cookie-cutter"

import { ProfileConsumer } from "@contexts/ProfileContext"

import Button from "@layout/Button"

import LoginModalButton from "@login/LoginModalButton"

import RegisterModalButton from "@register/RegisterModalButton"

function Header(): JSX.Element {
  return (
    <header className="bg-primary p-[var(--separator-big)]">
      <div className="w-4/5 mx-auto flex justify-end space-x-[var(--separator-big)]">
        <ProfileConsumer>
          {({ profile, setProfile }) => {
            if (profile) {
              return (
                <>
                  <div className="flex items-center">{profile.email}</div>
                  <Button
                    onClick={() => {
                      setProfile(null)
                      cookieCutter.set("access_token", null)
                    }}
                  >
                    Cerrar sesión
                  </Button>
                </>
              )
            }
            return (
              <>
                <RegisterModalButton />
                <LoginModalButton />
              </>
            )
          }}
        </ProfileConsumer>
      </div>
    </header>
  )
}

export default Header

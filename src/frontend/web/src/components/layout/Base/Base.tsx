/*
  Base component used to wrap a page.
*/

import { ModalProvider } from "@contexts/ModalContext"
import { Profile, ProfileProvider } from "@contexts/ProfileContext"

import Header from "@layout/Header"
import Modal from "@layout/Modal"

interface BaseProps {
  profile: Profile | null
  children: React.ReactNode
}

function Base({ profile, children }: BaseProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen font-primary bg-neutral text-neutral break-word">
      <ProfileProvider initialProfile={profile}>
        <ModalProvider>
          <Header />
          <main className="py-[var(--separator-big)]">{children}</main>
          <Modal />
        </ModalProvider>
      </ProfileProvider>
    </div>
  )
}

export default Base

import { ModalConsumer } from "@contexts/ModalContext"

import Button from "@layout/Button"

import LoginForm from "@login/LoginForm"

function LoginModalButton(): JSX.Element {
  return (
    <ModalConsumer>
      {({ setModal }) => (
        <Button
          onClick={() => {
            setModal({
              title: "Iniciar sesión",
              body: <LoginForm successCallback={() => setModal(null)} />,
            })
          }}
        >
          Iniciar sesión
        </Button>
      )}
    </ModalConsumer>
  )
}

export default LoginModalButton

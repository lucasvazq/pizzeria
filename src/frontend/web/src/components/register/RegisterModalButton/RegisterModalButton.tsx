import { ModalConsumer } from "@contexts/ModalContext"

import Button from "@layout/Button"

import RegisterForm from "@register/RegisterForm"

function RegisterModalButton(): JSX.Element {
  return (
    <ModalConsumer>
      {({ setModal }) => (
        <Button
          onClick={() => {
            setModal({
              title: "Registrarse",
              body: <RegisterForm successCallback={() => setModal(null)} />,
            })
          }}
        >
          Registrarse
        </Button>
      )}
    </ModalConsumer>
  )
}

export default RegisterModalButton

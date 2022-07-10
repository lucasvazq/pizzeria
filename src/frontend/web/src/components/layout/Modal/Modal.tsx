import { ModalConsumer } from "@contexts/ModalContext"

import Button from "@layout/Button"

import SVGClose from "@svg/SVGClose"

function Modal(): JSX.Element {
  return (
    <ModalConsumer>
      {({ modal, setModal }) => {
        if (!modal) {
          return null
        }
        return (
          <>
            <input type="checkbox" id="modal" className="modal-toggle" aria-hidden defaultChecked />
            <div className="modal">
              <div className="modal-box space-y-[var(--separator-big)] text-neutral-content">
                <div className="flex justify-between">
                  <div className="self-center w-full font-bold text-center">{modal.title}</div>
                  <Button onClick={() => setModal(null)}>
                    <SVGClose />
                  </Button>
                </div>
                {modal.body}
              </div>
            </div>
          </>
        )
      }}
    </ModalConsumer>
  )
}

export default Modal

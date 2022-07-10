import { createContext, useMemo, useState, Dispatch, SetStateAction } from "react"

interface Modal {
  title: string
  body: JSX.Element
}

interface ModalContextProps {
  modal: Modal | null
  setModal: Dispatch<SetStateAction<Modal | null>>
}

const ModalContext = createContext<ModalContextProps>({
  modal: null,
  setModal: (prevState: SetStateAction<Modal | null>) => prevState,
})

interface ModalProviderProps {
  children: React.ReactNode
}

function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const [modal, setModal] = useState<Modal | null>(null)

  const value = useMemo(() => ({ modal, setModal }), [modal, setModal])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

const ModalConsumer = ModalContext.Consumer

export { ModalProvider, ModalConsumer }

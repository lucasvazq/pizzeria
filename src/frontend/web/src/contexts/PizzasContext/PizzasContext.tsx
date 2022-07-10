import { createContext, useContext, useMemo, useState, Dispatch, SetStateAction } from "react"

interface Pizza {
  name: string
  price: number
}

interface PizzasContextProps {
  pizzas: Pizza[]
  setPizzas: Dispatch<SetStateAction<Pizza[]>>
}

const PizzasContext = createContext<PizzasContextProps>({
  pizzas: [],
  setPizzas: (prevState: SetStateAction<Pizza[]>) => prevState,
})

interface PizzasProviderProps {
  initialPizzas: Pizza[]
  children: React.ReactNode
}

function PizzasProvider({ initialPizzas, children }: PizzasProviderProps): JSX.Element {
  const [pizzas, setPizzas] = useState<Pizza[]>(initialPizzas)

  const value = useMemo(() => ({ pizzas, setPizzas }), [pizzas, setPizzas])

  return <PizzasContext.Provider value={value}>{children}</PizzasContext.Provider>
}

const PizzasConsumer = PizzasContext.Consumer

const usePizzasContext = () => useContext(PizzasContext)

export { type Pizza, PizzasProvider, PizzasConsumer, usePizzasContext }

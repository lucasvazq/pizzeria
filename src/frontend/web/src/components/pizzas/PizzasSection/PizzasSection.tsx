import Container from "@layout/Container"
import { H1 } from "@layout/Headings"

import PizzasCatalog from "@pizzas/PizzasCatalog"
import PizzasForm from "@pizzas/PizzasForm"

function PizzasSection(): JSX.Element {
  return (
    <section className="text-neutral-content font-primary-bold">
      <Container>
        <div className="text-center">
          <H1>
            {`Pizzas `}
            <span role="img" aria-label="Emoji de pizza">
              🍕
            </span>
          </H1>
        </div>
        <div className="flex flex-row space-x-[var(--separator-big)] p-[var(--separator-big)]">
          <div className="w-full">
            <PizzasCatalog />
          </div>
          <div className="w-full">
            <PizzasForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PizzasSection

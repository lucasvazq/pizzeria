import { PizzasConsumer } from "@contexts/PizzasContext"

import { H2 } from "@layout/Headings"

import { getIndex } from "@utils/transformers"

function PizzasCatalog(): JSX.Element {
  return (
    <div className="border-neutral-content border-2 p-[var(--separator-big)] space-y-[var(--separator)] rounded-lg">
      <H2>Catálogo</H2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <PizzasConsumer>
              {({ pizzas }) =>
                getIndex(pizzas).map((pizza_data) => (
                  <tr key={pizza_data.id}>
                    <td>{pizza_data.data.name}</td>
                    <td>{`$ ${pizza_data.data.price}`}</td>
                  </tr>
                ))
              }
            </PizzasConsumer>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PizzasCatalog

import Cookies from "cookies"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

import { PizzasProvider } from "@contexts/PizzasContext"

import Base from "@layout/Base"

import PizzasSection from "@pizzas/PizzasSection"

import { getPizzas } from "@api/pizzas"
import { getProfile } from "@api/profile"

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const cookies = new Cookies(req, res)
  const accessToken = cookies.get("access_token")
  return {
    props: {
      profile: await getProfile(accessToken, true),
      pizzas: await getPizzas(true),
    },
  }
}

function Index({ profile, pizzas }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Base profile={profile}>
      <PizzasProvider initialPizzas={pizzas}>
        <div>
          <PizzasSection />
        </div>
      </PizzasProvider>
    </Base>
  )
}

export default Index

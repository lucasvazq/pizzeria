import { AppProps } from "next/app"
import Head from "next/head"

import "@styles"

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <Component
        {...pageProps} // eslint-disable-line react/jsx-props-no-spreading
      />
    </>
  )
}

export default App

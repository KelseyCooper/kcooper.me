import '../styles/vars.css'
import '../styles/global.css'

import Layout from 'layout/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

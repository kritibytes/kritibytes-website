import '../styles/globals.css'
import '../styles/components/Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/ckeditor.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import AppLayout from '../components/AppLayout'
import { Provider } from 'next-auth/client'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <Provider session={pageProps.session}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Provider>
)

export default App
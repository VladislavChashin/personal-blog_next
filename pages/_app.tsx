import '@/styles/index.scss'
import '@/styles/header.scss'
import '@/styles/number.scss'
import '@/styles/posts.scss'
import '@/styles/search.scss'
import '@/styles/sidebar.scss'
import '@/styles/stories.scss'
import '@/styles/readpost.scss'
import '@/styles/myworks.scss'
import '@/styles/fonts/lato/stylesheet.css'
import '@/styles/fonts/roboto/stylesheet.css'
import '@/styles/reset.css'
import store  from '../store'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

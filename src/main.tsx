import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import Analytics from './components/Analytics.js'

const root = document.getElementById('root')

if (!root) {
  throw new Error('App root element was not found.')
}

hydrateRoot(root,
  <StrictMode>
    <>
      <Analytics />
      <App pathname={window.location.pathname} />
    </>
  </StrictMode>,
)

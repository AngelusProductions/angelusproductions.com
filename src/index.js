import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import HttpsRedirect from 'react-https-redirect';

import App from './components/App'

const history = createMemoryHistory();
const root = createRoot(document.getElementById('root'))

root.render(
  <HttpsRedirect>
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  </HttpsRedirect>
)

const registerServiceWorker = () => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            if (!installingWorker) {
              return
            }

            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and
                  // the fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available please refresh." message in your web app.
                  console.log('New content is available please refresh.') // tslint:disable-line
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  console.log('Content is cached for offline use.') // tslint:disable-line
                }
              }
            }
          }
        })
        .catch(error => {
          console.error('Error during service worker registration:', error) // tslint:disable-line
        })
    })
  }
}

registerServiceWorker()
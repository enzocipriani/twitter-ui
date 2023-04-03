import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import twitterLogo from './assets/logo-twitter.svg'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
        <Sidebar />
        <div className="content">
        <main className="timeline">
          <Header />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/enzocipriani.png" alt="Enzo Cipriani" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separetor" />

          <Tweet />
          <Tweet />

        </main>
        </div>
    </div>
  </React.StrictMode>
)

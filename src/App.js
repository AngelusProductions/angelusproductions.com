import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

import LinkContainer from './components/LinkCointainer'
import homeTabs from './constants/homeTabs'
import socialLinks from './constants/socialLinks'
import angelusBanner from './images/@ngelusBanner.gif'
import imdbIcon from './images/imdbIcon.png'  
import './App.scss'
import './home.scss'

const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(1)

  return (
    <main id="appContainer">
      <img id='homeBanner' alt='@ngelus logo' src={angelusBanner} />
      <div id='socialLinksContainer'>
        <a id="imdbIcon" className='interactable' href='https://www.imdb.com/name/nm13927757/'>
          <img src={imdbIcon} alt='imdbIcon' />
        </a>
        {socialLinks.map(socialLink => (
          <SocialIcon url={socialLink} key={socialLink} className='socialLink interactable' />
        ))}
      </div>
      <div id='homeTabsHeadersContainer'>
        {homeTabs.map(tab => (
          <h1
            key={tab.id}
            className={`tabName interactable ${selectedTabId === tab.id ? 'selectedTab' : 'unselectedTab'}`}
            onClick={() => setSelectedTabId(tab.id)}
          >
            {tab.name}
          </h1>
        ))}
      </div>
      <div id='homeTabsContainer'>
        {homeTabs.map(tab => (
          <section id={`homeTabFor${tab.name}`} key={tab.id} className='homeContainer'>
            {selectedTabId === tab.id && tab.links.map(link => <LinkContainer link={link} key={link.id} />)}
          </section>
        ))}
      </div>
    </main>
  )
}

export default App

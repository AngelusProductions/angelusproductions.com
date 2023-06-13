import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Spotify } from 'react-spotify-embed'
import getYoutubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import { SocialMediaEmbed } from 'react-social-media-embed'
import SoundCloud from 'react-soundcloud-embed'

import homeTabs from './constants/homeTabs'
import linkTypes from './constants/linkTypes'
import socialLinks from './constants/socialLinks'
import angelusBanner from './images/@ngelusBanner.gif'
import imdbIcon from './images/imdbIcon.png'  
import './App.scss'
import './home.scss'

const LinkHeader = ({ link }) => {
  if(!link.date) {
    debugger
  }
  return (
  <div className='linkHeader'>
    <a href={link.url} className='linkName' target='_blank' rel='noreferrer'>{link.name}</a>
    <span className='linkDate'>{link.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
  </div>
)}

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
            {selectedTabId === tab.id && tab.links.map(link => (
              <div className='linkContainer' key={link.id}>
                {link.type === linkTypes.spotify ? (
                  <div className='spotifyLinkContainer'>
                    <LinkHeader link={link} />
                    <Spotify link={link.url} className='spotifyEmbed' />
                  </div>
                ) : link.type === linkTypes.youtube ? (
                  <div className='youtubeLinkContainer'>
                    <LinkHeader link={link} />
                    <YouTube videoId={getYoutubeId(link.url)} className='youtubeEmbed' />
                  </div>
                  ) : link.type === linkTypes.soundcloud ? (
                    <div className='soudcloudLinkContainer'>
                      <LinkHeader link={link} />
                      <SoundCloud url={link.url} className='soundcloudEmbed' />
                    </div>
                  ) : link.type === linkTypes.instagram ? (
                    <div className='instagramLinkContainer'>
                      <LinkHeader link={link} />
                      <SocialMediaEmbed url={link.url} className='instagramEmbed' />
                    </div>
                  ) : (
                    <>
                      <LinkHeader link={link} />
                      <span className='linkDescription'>{link.description}</span>
                      {link.videoUrl && (
                        <video className='linkVideo' src={link.videoUrl} />
                      )}
                      {link.codeUrl && (
                        <a className='linkCode' href={link.codeUrl} rel='nonreferrer'>{link.codeUrl}</a>
                      )}
                    </>
                )}  
                
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}

export default App

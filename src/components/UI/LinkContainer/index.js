import { Spotify } from 'react-spotify-embed'
import { InstagramEmbed } from 'react-social-media-embed'
import YouTube from 'react-youtube'
import getYoutubeId from 'get-youtube-id'
import ReactPlayer from 'react-player'
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'

import linkTypes from '../../../constants/linkTypes'
import './index.scss'

const LinkContainer = ({ link }) => {
    if (link.type.name === 'SoundCloud') debugger
  return (
    <div id={`linkContainer${link.id}`} className={`linkContainer ${link.type.name}`}>
      <div className='linkHeader'>
        <h1 className='linkName'>{link.name}</h1>
        <span className='linkDate'>{link.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        <p>{link.description}</p>
      </div>
      {link.type === linkTypes.spotify ? <Spotify link={link.url} className='spotifyEmbed' />
     : link.type === linkTypes.youtube ? <YouTube videoId={getYoutubeId(link.url)} className='youtubeEmbed' />
     : link.type === linkTypes.instagram ? <InstagramEmbed url={link.url} className='instagramEmbed' />
     : link.type === linkTypes.soundcloud ? <ReactPlayer url={link.url} className='soundcloudEmbed' />
     : link.type === linkTypes.github ? (
      <div className='githubEmbed'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={link.screenshots.length}
          className='githubScreenshotCarousel'
        >
          <Slider className='githubScreenshotSlider'>
            {link.screenshots.map(screenshot => (
              <Slide 
                  id={`screenshot${screenshot.id}`} 
                  className='githubScreenshotSlide'
                  index={screenshot.id} key={screenshot.id}>
                <Image
                  src={screenshot.url}
                  className='githubScreenshotImage'
                  hasMasterSpinner
                />
              </Slide>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        {(link.url || link.codeUrl) && (
          <div className='githubUrls'>
            {link.url && <a href={link.url} className='githubLink'>Check it out</a>}
            {link.codeUrl && <a href={link.codeUrl} className='githubCodeLink'>Go to Repo</a>}
          </div>
        )}
      </div>
     )
     : <div className='emptyEmbed'>
        <span className='linkDescription'>{link.description}</span>
        {link.videoUrl && (
            <video className='linkVideo' src={link.videoUrl} />
        )}
        {link.codeUrl && (
            <a className='linkCode' href={link.codeUrl} rel='nonreferrer'>{link.codeUrl}</a>
        )}
       </div>
      }
    </div>
  )
}

export default LinkContainer
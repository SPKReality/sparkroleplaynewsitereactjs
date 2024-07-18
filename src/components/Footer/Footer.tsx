import { Container } from './styles'
import instagramIcon from '../../assets/instagram.svg'
import tiktoklogo from '../../assets/tiktok-svgrepo-com.svg'
import youtubeLogo from '../../assets/youtube-color-svgrepo-com.svg'
import kicklogo from '../../assets/kickstarter-kick-starter-crowdfunding-svgrepo-com.svg'
import twitch from '../../assets/twitch-svgrepo-com.svg'
import github from '../../assets/github.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://sparkroleplay.xyz" className="logo">
        <span>www.spark</span>
        <span>roleplay.xyz</span>
      </a>
      <div>
        <p>
          This Website was developed and is maintained by <a href="http://github.com/spkreality">SPKReality</a>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/spkreality/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/sparkrpuk/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@sparkroleplayuk"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktoklogo} alt="Tiktok" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCnwa3upvjx5fUQ9EocT3uZA"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeLogo} alt="Youtube" />
        </a>
        <a
          href="https://kick.com/spkreality"
          target="_blank"
          rel="noreferrer"
        >
          <img src={kicklogo} alt="Kick" />
        </a>
        <a
          href="https://www.twitch.tv/spkreality14"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitch} alt="Twitch" />
        </a>
      </div>
    </Container>
  )
}

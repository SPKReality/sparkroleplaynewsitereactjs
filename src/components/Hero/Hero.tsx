import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import instagramIcon from '../../assets/instagram.svg'
import tiktoklogo from '../../assets/tiktok-svgrepo-com.svg'
import youtubeLogo from '../../assets/youtube-color-svgrepo-com.svg'
import kicklogo from '../../assets/kickstarter-kick-starter-crowdfunding-svgrepo-com.svg'
import twitch from '../../assets/twitch-svgrepo-com.svg'
import sparkroleplaylogo from '../../assets/Transparent Logo.png'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, Welcome To</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Spark Roleplay 2.0</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>UK Based FiveM Roleplay Server</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Join us today for the most immerse and serious roleplay.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <div className="social-media">
        <a
          href="https://github.com/spkreality/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
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
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={sparkroleplaylogo} alt="Spark Roleplay Logo" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
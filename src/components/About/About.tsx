import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import loadingscreen from "../../assets/loadingscreen.png"


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About us</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Spark Roleplay is a brand new UK Based Server, We are a serious RP server that lets you live the life of your dreams. We run QBCore with a great economy and plenty of opportunities to make money, friends and even get involved in the illegal sides of the UK
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          We have a thriving choice of player owned businesses to purchase and many jobs that are public, we also include many whitelisted jobs such as MET Police and NHS you can apply for these in your own time. We have a active crime scene for those who wish to live a life of crime, with gang opportunities and lots of rewarding unique heists to learn and complete.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Our staff team is dedicated to allow the best possible time here at Spark Roleplay with minimal issues and fast answers, we allow new or experienced players to join us as we are here to help. What are you waiting for? Come and join the fun @ Spark Roleplay UK.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Come check it out!</h3>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={loadingscreen} alt="Spark Roleplay Loading Screen" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

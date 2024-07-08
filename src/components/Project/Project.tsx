import { Container } from "./styles";
import sparklogo from "../../assets/Transparent Logo.png"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Meet our team</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>Makka Pakka</h2>
            </header>
            <div className="body">
              <h2>Server Owner & Lead Staff Management</h2>
              <p>Hello Im Makka Pakka, I am one of the Server Owners & Lead Staff Managemnt within Spark Roleplay. I am 21 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Lead Staff Management</li> <li>Server Owner</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>SPKReality</h2>
            </header>
            <div className="body">
              <h2>Server Owner & Lead Developer</h2>
              <p>Hello Im SPKReality, I am one of the Server Owners, Lead Developers, Marketing Staff & Social Medial Mangement Staff within Spark Roleplay. I am 17 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Server Owner</li> <li>Lead Developer</li> <li>Marketing Team</li> <li>Media Management</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>Daniel J</h2>
            </header>
            <div className="body">
              <h2>Server Owner & Lead Developer</h2>
              <p>Hello Im Daniel J, I am one of the Server Owners, Lead Developers & Vehicle Developers within Spark Roleplay. I am 20 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Server Owner</li> <li>Lead Developer</li> <li>Vehicle Developer</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>EliteXEu</h2>
            </header>
            <div className="body">
              <h2>Server Support Team & Management</h2>
              <p>Hello Im EliteXEu, I am one of the Server Support Team within Spark Roleplay. I am 17 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Server Support</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>FernoXEu</h2>
            </header>
            <div className="body">
              <h2>Server Support Team & Management</h2>
              <p>Hello Im FernoXEu, I am one of the Server Support Team within Spark Roleplay. I am 17 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Server Support</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <img width="275" src={sparklogo} alt="Visit site" />
              <h2>ImmortalSoul</h2>
            </header>
            <div className="body">
              <h2>Server Support Team & Management</h2>
              <p>Hello Im ImmortalSoul, I am one of the Server Support Team within Spark Roleplay. I am 17 Years old from the United Kingdom.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Server Support</li> </ul> </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
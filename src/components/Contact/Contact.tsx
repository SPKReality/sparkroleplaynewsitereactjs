import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import discordlogo from "../../assets/discord-svgrepo-com.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Need to contact us?</p>
        <p>If you dont want to email join our discord and open a ticket!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:sparkrproleplay@gmail.com"><img src={emailIcon} alt="Email Us" /></a> 
          <a href="mailto:sparkrproleplay@gmail.com">sparkrproleplay@gmail.com</a>
        </div>
        <div>
        <a href="https://discord.sparkroleplay.xyz"><img src={discordlogo} alt="Discord Link" /></a>
          <a href="https://discord.sparkroleplay.xyz">Join Our Discord</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
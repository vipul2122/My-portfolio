import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; 
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{display:"flex",gap:"2px", alignItems:"center",justifyContent:"flex-end"}}>
           
            <a href="https://www.linkedin.com/in/vipul-kumar-b0b695212"><FontAwesomeIcon style={{height:"40px",width:"48px"}} icon={faLinkedin} /></a>
              <a href="https://github.com/vipul2122">
                <FontAwesomeIcon style={{height:"40px",width:"48px"}} icon={faGithub} />
              </a>
              <a href="mailto:iamvip2122@gmail.com">
                <FontAwesomeIcon style={{height:"48px",width:"48px"}} icon={faEnvelope} />
              </a>
             
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

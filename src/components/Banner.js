import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pngtree-website-technology-line-dark-background-image_2344719.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ name = "Vipul Kumar", tagline = "Welcome to my Portfolio", description = "As a skilled front-end developer specializing in React, I also bring valuable knowledge of Node.js to my projects. Currently, I am contributing to the development of a significant cultural portal for the Indian government, showcasing my ability to handle complex and impactful projects." }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Developer", "Mern fullstack Developer"];
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{tagline}</span>
                  <h1>{`Hi! I'm ${name}`} <br></br><span className="txt-rotate" dataPeriod="100" data-rotate='["Web Developer", "Full-stack Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>{description}</p>
                 
                </div>
              )}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

Banner.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
};

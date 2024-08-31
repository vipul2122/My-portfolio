import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/portfolio.jpg";
import projImg2 from "../assets/img/facebook.jpg";
import projImg3 from "../assets/img/Tic Tac Toe.jpg";
import projImg4 from "../assets/img/ecommerce.jpg";
import projImg5 from "../assets/img/D3.js(Mind map).jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
export const Projects = () => {

  const projects = [
    {
      title: "My Porfolio",
      description: <a href="https://github.com/vipul2122/myportfolio"><p style={{backgroundColor:"gray",borderRadius:"5px"}}>Go to GITHUB</p></a>,
      imgUrl: projImg1,
    },
    {
      title: "Facebook-clone",
      description:  <a href="https://github.com/vipul2122/Facebookclone"><p style={{backgroundColor:"gray",borderRadius:"5px"}}>Go to GITHUB</p> </a>,
      imgUrl: projImg2,
    },
    {
      title: "Tic-Tac-Toe Game",
      description: <a href="https://github.com/vipul2122/Tic-Tac-Toe"><p style={{backgroundColor:"gray",borderRadius:"5px"}}>Go to GITHUB</p></a>,
      imgUrl: projImg3,
    },
    
  ];
  const projects2 = [
    {
      title: "E-commerce",
      description: <a href="https://github.com/vipul2122/Mern-Ecommerce"><p style={{backgroundColor:"gray",borderRadius:"5px"}}>Go to GITHUB</p> </a>,
      imgUrl: projImg4,
    } 
  ]
  const projects3= [
    {
      title: "D3.js Project",
      description: <a href="https://github.com/vipul2122/D3.Js-india-mind-map"><p style={{backgroundColor:"gray",borderRadius:"5px"}}>Go to GITHUB</p> </a>,
      imgUrl: projImg5,
    } 
  ]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
          
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mern-FullStack Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">D3.js Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
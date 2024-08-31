import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Container style={{display:"flex"}}>
                          <Container >
                          <row><h5>Frontend</h5></row>
                            
                          <row>
                            <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              React js
                               <ProgressBar now={"85"} label="85%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                              
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Javascript
                               <ProgressBar now={"80"} label="80%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Redux-toolkit
                               <ProgressBar now={"80"} label="80%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Tailwind css
                               <ProgressBar now={"80"} label="80%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Bootstrap
                               <ProgressBar now={"80"} label="80%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              HTML
                               <ProgressBar now={"90"} label="90%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              CSS
                               <ProgressBar now={"90"} label="90%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              D3.Js
                               <ProgressBar now={"50"} label="50%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          </Container>
                          <Container>
                            <Container>
                            <row><h5>Backend</h5></row>
                            <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Node Js
                               <ProgressBar now={"60"} label="60%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              Express Js
                               <ProgressBar now={"60"} label="60%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          </Container>
                          <Container style={{marginTop:"40px"}}>
                          <row><h5>Database</h5></row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              MongoDB
                               <ProgressBar now={"70"} label="70%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          <row>
                          <label style={{display:"flex", alignItems:"center", width:"100%",gap:"50px",justifyContent:"start"}}>
                              My-SQL
                               <ProgressBar now={"70"} label="70%" style={{backgroundColor:"white", width:"50%"}}/>
                            </label>
                          </row>
                          </Container>
                          </Container>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
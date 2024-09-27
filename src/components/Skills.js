import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Container>
                <Row>
                  {/* Languages Section */}
                  <Col md={6} sm={12}>
                    <h5>Languages</h5>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                        JavaScript
                        <ProgressBar now={85} label="85%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        TypeScript
                        <ProgressBar now={60} label="60%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        HTML
                        <ProgressBar now={90} label="90%" style={{ width: "60%" }} />
                      </label>
                    </div>
                  </Col>

                  {/* Frontend Libraries Section */}
                  <Col md={6} sm={12}>
                    <h5>Frontend Libraries</h5>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        React.js
                        <ProgressBar now={85} label="85%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        JavaScript
                        <ProgressBar now={80} label="80%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px" ,justifyContent:"space-between"}}>
                        Redux-toolkit
                        <ProgressBar now={80} label="80%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        Tailwind CSS
                        <ProgressBar now={80} label="80%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        Bootstrap
                        <ProgressBar now={80} label="80%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        CSS
                        <ProgressBar now={90} label="90%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        D3.js
                        <ProgressBar now={50} label="50%" style={{ width: "60%" }} />
                      </label>
                    </div>
                  </Col>
                </Row>

                <Row>
                  {/* Backend Section */}
                  <Col md={6} sm={12}>
                    <h5>Backend</h5>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        Node.js
                        <ProgressBar now={60} label="60%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        Express.js
                        <ProgressBar now={60} label="60%" style={{ width: "60%" }} />
                      </label>
                    </div>
                  </Col>

                  {/* Database Section */}
                  <Col md={6} sm={12}>
                    <h5>Database</h5>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        MongoDB
                        <ProgressBar now={70} label="70%" style={{ width: "60%" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "20px",justifyContent:"space-between" }}>
                        MySQL
                        <ProgressBar now={70} label="70%" style={{ width: "60%" }} />
                      </label>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

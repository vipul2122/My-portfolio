import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx" style={{ height: '250px' }}>
      <img src={imgUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </Col>
  
  )
}
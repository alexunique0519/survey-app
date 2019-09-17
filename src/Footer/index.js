import React from "react";
import { Row, Col, ProgressBar, Container } from "react-bootstrap" 
import "./styles.css";

class Footer extends React.Component {
  render() {
    const downSvg = require("./assets/down.svg");
    const upSvg = require("./assets/up.svg");
    return (
      <div className="footer">
      <Container >
        <Row>
          <Col xs={6}><ProgressBar now={this.props.progress} label={`${this.props.progress}%`}/></Col>
          <Col xs={6} className="navigator">
            <button title="Next" onClick={this.props.onNext}><img src={downSvg} alt="down"/></button>
            <button title="Prev" onClick={this.props.onPrev}><img src={upSvg} alt="up" /></button>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Footer;
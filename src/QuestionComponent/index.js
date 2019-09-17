import React, {Fragment} from 'react';
import {Container, Row, Col } from "react-bootstrap"
import "./styles.css";

class QuestionComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isMobileLayout: false};
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    handleResize = e => {
      const windowSize = window.innerWidth;
      if (windowSize < 576) {
        this.setState({isMobileLayout: true})
      } else {
        this.setState({isMobileLayout: false})
      }
    };

    handleClick = (e) => {
       const response = e.currentTarget.innerHTML;
       this.props.onSelect(response);
    }

    renderMobile () {
      return (<div className="mobile-selections">
        <div>Strongly disagree</div>
          {["1","2","3","4","5"].map((value, index) => {
            let classNameString = "selection-button no-padding";
            if (value === this.props.question.Response) {
              classNameString = "selection-button no-padding answered"
            }
              return <div className={classNameString} onClick={this.handleClick} key={index}>{value}</div>
            })
          }
        <div>Strongly agree</div>
      </div>
      )
    }

    render() {
        return (
        <div className="wrapper">
          <Container>
            <div className="question-heading">{this.props.question.QuestionCategory}</div>
            <p className="question-text">{this.props.question.QuestionText}</p>
            {
              this.state.isMobileLayout 
                ? this.renderMobile ()
                : (<Fragment><Row className="text-center">
                    {["1","2","3","4","5"].map((value, index) => {
                      let classNameString = "selection-button no-padding";
                      if (value === this.props.question.Response) {
                        classNameString = "selection-button no-padding answered"
                      }
                      return <Col sm={2} xs={3} key={index} ><div className={classNameString} onClick={this.handleClick}>{value}</div></Col>
                    }
                  )
                }
              </Row>
              <Row>
                <Col sm={6} className="no-padding">Strongly disagree</Col>
                <Col sm={6} className="no-padding">Strongly agree</Col>
              </Row></Fragment>)
            }
            
          </Container>
       </div>)
    }
}

export default QuestionComponent;
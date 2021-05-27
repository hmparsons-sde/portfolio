import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import map from '../assets/map.png';

const ContactLinks = styled.div`
  padding-top: 225px;
  padding-left: 200px;
  clear: right;
`;

const Map = styled.div`
  float: right;
  position: absolute;
  right: 50px;
  top: 50px;
  display: block;
`;

export default function Contact() {
  return (
    <div>
      <Col>
        <Map className="col-6">
          <img src={map}></img>
        </Map>
      </Col>
    <ContactLinks>
      <Col className="contactContainer col-6">
        <Row className="col-6 pb-3 justify-content-center pt-5">
          <h2 className="ml-5">GET IN TOUCH</h2>
        </Row>
        <Row className="contactInfo">
            <Col className="nav-item col-2"><a href="mailto:holly-parsons@outlook.com" id="email" className="nav-link" target="_blank" rel="noreferrer">
                <img src={email} width="80px"></img>
              </a>
            </Col>
            <Col className="nav-item col-2">
              <a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer">
                <img src={linkedin} width="80px"></img>
              </a>
            </Col>
            <Col className="nav-item col-2"><a href="https://github.com/hmparsons-sde" id="github" className="nav-link" target="_blank" rel="noreferrer">
                <img src={github} width="80px"></img>
              </a>
            </Col>
          </Row>
        </Col>
      </ContactLinks>
    </div>
  );
}

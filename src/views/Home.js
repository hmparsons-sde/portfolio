import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import navbrand from '../assets/navbrand.png';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const LandingImage = styled.div`
  float: right;
  position: absolute;
  right: 50px;
  bottom: 30px;
  display: block;
`;

const Greeting = styled.div`
  padding-left: 300px;
  padding-top: 90px;
  clear: right;
`;

export default function Home() {
  return (
    <div>
      <Col className="col-6">
        <Row>
          <Greeting>
            <header className="masthead">
              <div className="heroheader">
                <div className="content">
                    <h1>HOLLY PARSONS</h1>
                    <hr />
                    <h5>I am a Full-Stack Web Developer + Product Manager.</h5>
                    <p>Check out <a href='/projects'>my work</a> & <a href='/tech'>my tech stack</a>.</p>
                    <hr />
                  <br></br>
                  <Row>
                    <a href="mailto:holly-parsons@outlook.com" id="email" className="nav-link" target="_blank" rel="noreferrer">
                      <img src={email} width="80px"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer">
                      <img src={linkedin} width="80px"></img>
                    </a>
                    <a href="https://github.com/hmparsons-sde" id="github" className="nav-link" target="_blank" rel="noreferrer">
                      <img src={github} width="80px"></img>
                    </a>
                  </Row>
                </div>
              </div>
            </header>
          </Greeting>
        </Row>
      </Col>
      <LandingImage>
        <img src={navbrand}></img>
      </LandingImage>
    </div>
  );
}

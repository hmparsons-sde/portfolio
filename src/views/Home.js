import React from 'react';
import styled from 'styled-components';
import landingpage from '../assets/landingpage.png';
// import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
const LandingImage = styled.div`
  height:50%;
  width:66%;
`;
// I will update this view. Image is a placeholder for intended styling.
export default function Home() {
  return (
    <LandingImage>
      <img src={landingpage}></img>
    </LandingImage>
  );
}

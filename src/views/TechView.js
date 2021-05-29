import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TechCard from '../Components/Cards/TechCards';
import getTechs from '../helpers/data/techData';
import footer from '../assets/footer.png';

const TechContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

const BottomAccent = styled.div`
  float: left;
  right: 50px;
  bottom: 30px;
  display: block;
`;
function TechView() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    getTechs().then((techArray) => setTech(techArray));
  }, []);

  return (
    <>
      <TechContainer className="mb-3">
        {tech.map((techInfo) => (
          <TechCard
          key={techInfo.firebaseKey}
          firebaseKey={techInfo.firebaseKey}
          tech={techInfo.tech}
          icon={techInfo.icon}
          setTech={setTech}
          />
        ))}
      </TechContainer>
      <BottomAccent>
        <img src={footer}></img>
      </BottomAccent>
    </>
  );
}

TechView.propTypes = {
  tech: PropTypes.array,
  setTech: PropTypes.func,
  admin: PropTypes.any
};

export default TechView;

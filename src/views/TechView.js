import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TechCard from '../Components/Cards/TechCards';
import { getTechs } from '../helpers/data/techData';

const TechContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

function TechView() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    getTechs().then((techArray) => setTech(techArray));
  }, []);

  return (
    <>
      <TechContainer>
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
    </>
  );
}

TechView.propTypes = {
  tech: PropTypes.array,
  setTech: PropTypes.func,
  user: PropTypes.any
};

export default TechView;

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditBioFormComp = styled.div`
  margin: 20px auto;
  padding: 5px;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    box-shadow: inset 0px 0px 0px 0px;
    text-transform: uppercase;
  }
`;

export default function EditBioForm({
  setEditBios, editBios
}) {
  const [editBio, setEditBio] = useState({
    aboutme: '',
  });

  const handleInputChange = (e) => {
    setEditBio((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditBios([editBio, ...editBios]);
    setEditBio({
      aboutme: '',
    });
  };

  return (
    <EditBioFormComp className='EditBio'>
      <form
        className='edit-bio'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
      <input
        name=''
        type='text'
        placeholder='Edit Bio'
        value={editBio.aboutme}
        onChange={handleInputChange}
      />
      <br/>
      </form>
    </EditBioFormComp>
  );
}

EditBioForm.propTypes = {
  setEditBios: PropTypes.func.isRequired,
  editBios: PropTypes.array.isRequired
};

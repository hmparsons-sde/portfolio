import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditContactFormComp = styled.div`
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

export default function EditContactForm({
  setEditContacts, editContacts
}) {
  const [editContact, setEditContact] = useState({
    title: '',
    link: '',
  });

  const handleInputChange = (e) => {
    setEditContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditContacts([editContact, ...editContacts]);
    setEditContact({
      title: '',
      link: '',
    });
  };

  return (
    <EditContactFormComp className='EditContact'>
      <form
        className='editcontact'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
      <input
        name='Contact Method'
        type='text'
        placeholder='Add a contact method'
        value={editContact.title}
        onChange={handleInputChange}
      />
      <br/>
      <input
        name='Contact Link'
        type='text'
        placeholder='Add a contact method link'
        value={editContact.link}
        onChange={handleInputChange}
      />
      </form>
    </EditContactFormComp>
  );
}

EditContactForm.propTypes = {
  setEditContacts: PropTypes.func,
  editContacts: PropTypes.array
};

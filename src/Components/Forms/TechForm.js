import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import { addTechs, updateTech } from '../../helpers/data/techData';

export default function TechForm({
  setTech, setTechForm, icon, firebaseKey, tech, setEditing
}) {
  const [technology, setTechnology] = useState({
    icon: icon || '',
    tech: tech || '',
    firebaseKey: firebaseKey || ''
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technology.firebaseKey) {
      updateTech(technology).then((techArray) => setTech(techArray));
      setEditing(false);
    } else {
      addTechs(technology).then((techArray) => setTech(techArray));
      setTechForm(false);
    }
  };

  return (
    <Form
      id='addTechForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for="url">Tech Icon</Label>
        <Input
          type="url"
          name="icon"
          id="icon"
          placeholder="Add icon"
          value={technology.icon}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Tech</Label>
        <Input
          type="string"
          name="TechName"
          id="TechName"
          placeholder="Name of Tech"
          value={technology.tech}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

TechForm.propTypes = {
  setTech: PropTypes.func,
  setTechForm: PropTypes.func,
  icon: PropTypes.string,
  firebaseKey: PropTypes.string,
  tech: PropTypes.string,
  setEditing: PropTypes.func
};

import React, { useState } from 'react';

const Form = props => {
  const [person, setPerson] = useState({ name: '', email: '', role: '' });
  const { setPeople } = props;

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPeople(people => [...people, person]);
    setPerson({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        placeholder='name'
        name='name'
        value={person.name}
      />
      <input
        onChange={handleChange}
        type='email'
        placeholder='email'
        name='email'
        value={person.email}
      />
      <input
        onChange={handleChange}
        type='text'
        placeholder='role'
        name='role'
        value={person.role}
      />
      <button type='submit'>Add Person</button>
    </form>
  );
};

export default Form;

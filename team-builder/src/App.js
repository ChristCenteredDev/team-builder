import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState([
    { id: 0, name: 'William', email: 'no@thanks', role: 'Dev' },
    { id: 1, name: 'Bill', email: 'no@way', role: 'Dad' }
  ]);

  const addPerson = person => {
    setPeople([...people, { ...person, id: Date.now() }]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
    const oldPerson = peopleCopy.find(person => person.id === editedPerson.id);
    oldPerson.name = editedPerson.name;
    oldPerson.email = editedPerson.email;
    oldPerson.role = editedPerson.role;
    setPeople(peopleCopy);
  };

  return (
    <div className='App'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add Person</Link>
      <Route
        exact
        path='/'
        render={props => {
          return people.map(obj => {
            console.log(obj);
            return <Card person={obj} key={obj.name} />;
          });
        }}
      />

      <Route
        path='/add'
        render={props => <Form {...props} submitPerson={addPerson} />}
      />

      <Route
        path='/edit/:id'
        render={props => {
          const person = people.find(
            person => person.id.toString() === props.match.params.id
          );
          return (
            <Form {...props} initialPerson={person} submitPerson={editPerson} />
          );
        }}
      />
    </div>
  );
}

export default App;

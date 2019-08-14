import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  const [people, setPeople] = useState([
    { name: 'William', email: 'no@thanks', role: 'Dev' },
    { name: 'Bill', email: 'no@way', role: 'Dad' }
  ]);

  return (
    <div className='App'>
      <Form setPeople={setPeople} />
      {people.map(obj => {
        return <Card person={obj} key={obj.name} />;
      })}
    </div>
  );
}

export default App;

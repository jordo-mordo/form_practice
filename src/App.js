import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import List from './components/List.js';
import React, {useState} from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  const onFormSubmit = (e, data) => {
    e.preventDefault();
    setContacts([...contacts, data])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form onFormSubmit={onFormSubmit}/>
        <List contacts={contacts}/>
      </header>
    </div>
  );
}

export default App;

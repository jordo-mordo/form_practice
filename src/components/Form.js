import React, {useState} from 'react';
import './Form.css';

function Form({onFormSubmit}) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState(null);
  // const [email, setEmail] = useState('');
  const [data, setData] = useState( {
    name: '',
    number: null,
    email: ''
  })

  const updateData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const dataCopy = data;
    dataCopy[name] = value;
    setData(dataCopy);
  }

  return(
    <form id="infoForm" onSubmit={(e) => onFormSubmit(e, data)}>
      <label>Name:</label>
      <input required name='name' type="text" onChange={(e) => updateData(e)}></input>
      <label>Number:</label>
      <input required name='number' type="number" onChange={(e) => updateData(e)}></input>
      <label>Email:</label>
      <input required name='email' type="email" onChange={(e) => updateData(e)}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;
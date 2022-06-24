import React, {useState} from 'react';
import './List.css';

function List({contacts}) {
  return(
    <table id="dataTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
        </tr>
    </thead>
    <tbody>
      {contacts.map((contact, index) => (
        <>
          <tr>{contact.name}</tr>
          <tr>{contact.number}</tr>
          <tr>{contact.email}</tr>
        </>
      ))}
    </tbody>
    </table>
  )
}

export default List;
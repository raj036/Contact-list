import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John', phone: '123-456-7890' },
    { id: 2, name: 'Sam', phone: '987-654-3210' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addContact = () => {
    if (newName.trim() && newPhone.trim()) {
      const newContact = {
        id: Date.now(),
        name: newName,
        phone: newPhone,
      };
      setContacts([...contacts, newContact]);
      setNewName('');
      setNewPhone('');
    } else {
      alert('Please fill in both fields');
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Contact List</h1>

      {/* Add Contact Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Phone"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          className="input"
        />
        <button onClick={addContact} className="add-button">
          Add
        </button>
      </div>

      {/* Display Contact List */}
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div>
              <strong className="contact-name">{contact.name}</strong>
              <span className="contact-phone">{contact.phone}</span>
            </div>
            <button
              onClick={() => deleteContact(contact.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

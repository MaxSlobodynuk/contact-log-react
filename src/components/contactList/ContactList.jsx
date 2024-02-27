import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(person => (
          <li key={person.id}>
            {person.name}: <span>{person.number}</span>{' '}
            <button
              onClick={() => onDeleteContact(person.id)}
              className="btn-close"
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

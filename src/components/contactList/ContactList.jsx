import React from 'react';
import style from '../Class.module.css';

class ContactList extends React.Component {
  handleDeleteContact = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul className={style.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={style.listItem}>
            {contact.name}
            <span> </span>
            {contact.number}
            <button onClick={() => this.handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

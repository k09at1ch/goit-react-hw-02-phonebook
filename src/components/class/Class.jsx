import React from 'react';
import { nanoid } from 'nanoid';
import style from './Class.module.css';
class MyClassComponent extends React.Component {
  state = {
    contacts: [
      { id: 'id-23', name: 'Illia Mysan', number: '+380679222233' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    searchTerm: '',
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleTelChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, name, number, searchTerm } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={style.all}>
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        <ul className={style.list}>
          {filteredContacts.map(contact => (
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
        <h2>Add Contact</h2>
        <ul className={style.listItem}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleNameChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleTelChange}
        />
        <button type="button" onClick={this.handleAddContact}>
          Add contact
        </button>
        </ul>
      </div>
    );
  }
}

export default MyClassComponent;

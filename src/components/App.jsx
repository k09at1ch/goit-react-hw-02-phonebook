import React from 'react';
import style from './Class.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
class App extends React.Component { 
  state = {
    contacts: [
      { id: 'id-23', name: 'Illia Mysan', number: '+380679222233' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    searchTerm: '',
  };

  handleAddContact = newContact => {
    const { name } = newContact;
    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExists) {
      alert('Contact with this name already exists.');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSearchChange = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { contacts, searchTerm } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={style.all}>
        <h1 className={style.all}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;

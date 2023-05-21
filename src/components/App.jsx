import css from './app.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import Form from './form/form';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

class Phonebook extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  
  componentDidMount() {
    const localStorageContact = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContact) {
      this.setState({ contacts: [...localStorageContact] })
    }
}

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExistedName = this.state.contacts.map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());
    
    if (isExistedName) {
      alert(`Contact with name "${name}" already exist`);
      return
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    })
    )
  }

  handleDeleteContact = (contactId) => {
    this.setState(({contacts}) => ({
    contacts: contacts.filter(({id}) => id !==contactId )
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
}

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
   return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    const {
      handleAddContact,
      handleChange,
      filterContacts,
      handleDeleteContact
    } = this;
    const { filter } = this.state;
    
    return (
      <div>
        <h1 className={css.title}> Phonebook </h1>
        <Form onSubmit={handleAddContact} />
        <h2 className={css.title}> Contacts </h2>
        <Filter
          value={filter}
          onChange={handleChange} />
        {filterContacts().length !== 0 ? (
          <ContactList
          contacts={filterContacts()}
            onDeleteContact={handleDeleteContact} />
        ) : (
            <p className={css.message}>No contacts</p>
          )}
      </div>
    )
  };
}

export default Phonebook





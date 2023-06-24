import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

import { Wrapper, MainTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = data => {
    for (const contact of this.state.contacts) {
      if (data.name.includes(contact.name)) {
        alert(`${contact.name} "is already in contacts"`);
        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  handleSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContact;
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    return (
      <Wrapper>
        <MainTitle>Phone book</MainTitle>
        <ContactForm onForm={this.handleSubmit} />
        <Filter searchName={this.state.filter} onSearch={this.handleSearch} />
        <ContactList
          contacts={this.getContact()}
          onDelete={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

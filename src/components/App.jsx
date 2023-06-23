import { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleSubmit = data => {
    // for (const contact of this.state.contacts) {
    //   if (data.name.includes(contact.name)) {
    //     alert(`${contact.name} "is already in contacts"`);
    //     return;
    //   }
    // }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    return (
      <div>
        <ContactForm onForm={this.handleSubmit} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

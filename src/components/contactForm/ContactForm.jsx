import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    phone: '',
    name: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.phone,
    };
    this.props.onForm(contact);

    this.setState({
      phone: '',
      name: '',
    });
  };

  render() {
    return (
      <form>
        <label>
          <span>Name</span>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span>Number</span>

          <input
            onChange={this.handleInputChange}
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
        </label>
        <button type="submit" onClick={this.handleSubmitForm}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

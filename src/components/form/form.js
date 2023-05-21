import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from './form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  }

  handleAddContact = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
  nameInputId = nanoid();
  numberInputId = nanoid();


  render() {
    return (
      <form className={css.addForm}
        onSubmit={this.handleAddContact}>
        <label
          htmlFor={this.nameInputId}
          className={css.addForm__lable}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          className={css.addForm__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label
          className={css.addForm__lable}
          htmlFor={this.numberInputId}>
          Phone
        </label>
        <input
          type="tel"
          name="number"
          id={this.numberInputId}
          className={css.addForm__input}
          pattern="^[\+]?[0-9]+(([\( \) \-][0-9])?[0-9]*)*$"
          title="Name may contain only numbers, round brackets, dash and spaces. For example 067 555 55 55, +38(067)55 55 555, +38-067-55-555-55"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />

        <button
          className={css.button}
          type='submit'
        > Add contact </button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form
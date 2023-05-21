import ContactItem from './contactItem'
import PropTypes from "prop-types";
import css from './contact.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map((contact) => {
        return (<ContactItem
          key={contact.id}
          item={contact}
          onDeleteContact={onDeleteContact} />)
      })}
    </ul>)
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


export default ContactList 
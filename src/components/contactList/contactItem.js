import PropTypes from "prop-types";
import css from './contact.module.css';

const ContactItem = ({ item, onDeleteContact }) => {
  const { id, name, number } = item
  return (
    < li
      className={css.contact__item}
    >
      <span className={css.contact__name}>
        {name}:
      </span>
      <span className={css.contact__number}>
        {number}
      </span>
      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li >)
}

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem
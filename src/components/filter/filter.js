import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from './filter.module.css';

const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <div className={css.filter}>
      <label
        htmlFor={filterInputId}
        className={css.filter__lable} > Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        id={filterInputId}
        className={css.filter__input}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter
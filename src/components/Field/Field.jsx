import PropTypes from 'prop-types';

import './Field.scss';

/**
 * Field component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.value - The value of the field.
 * @param {string} props.type - The type of the field.
 * @param {string} props.name - The name of the field.
 * @param {string} props.placeholder - The placeholder of the field.
 * @param {Function} props.onChange - The function to handle the field change.
 * @returns {JSX.Element} The rendered Field component.
 */
const Field = ({ value, type, name, placeholder, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;

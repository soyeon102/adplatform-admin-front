import classes from './Input.module.css';

const Input = ({
  type = 'text',
  value,
  inputId,
  label,
  isRequired = true,
  msg,
  placeholder,
  handleChangeInput,
}) => {
  return (
    <div className={classes['input-container']}>
      <label htmlFor={inputId}>
        {label}
        {isRequired && <span>*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChangeInput}
        placeholder={placeholder}
      />
      {msg !== '' && <div className={classes['input-msg']}>{msg}</div>}
    </div>
  );
};

export default Input;

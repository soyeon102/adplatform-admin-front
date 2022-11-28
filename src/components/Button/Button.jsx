import classes from './Button.module.css';

const Button = ({ text, isBlue = true, handleButtonClick }) => {
  return (
    <button
      className={isBlue ? classes.btn : `${classes.btn} ${classes.gray}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;

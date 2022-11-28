import classes from './Switch.module.css';

const Switch = ({ status, handleSwitchClick }) => {
  return (
    <div
      className={
        status
          ? `${classes['switch-container']} ${classes.active}`
          : classes['switch-container']
      }
    >
      <span className={classes.circle} onClick={handleSwitchClick}></span>
    </div>
  );
};

export default Switch;

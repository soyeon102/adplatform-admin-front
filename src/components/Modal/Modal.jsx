import classes from './Modal.module.css';

const Modal = ({ children, headerText, handleClose }) => {
  return (
    <div className={classes['modal-container']} onClick={handleClose}>
      <div
        className={classes['modal-inner']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes['modal-header']}>{headerText}</div>
        <div>{children}</div>

        <button className={classes['close-btn']} onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;

import classes from './SelectBox.module.css';
import { useDispatch } from 'react-redux';
import { changeRoll } from '../../redux/modules/authReducer';

const SelectBox = () => {
  const dispatch = useDispatch();

  const handleChangeRoll = (e) => {
    dispatch(changeRoll(e.target.value));
  };

  return (
    <select className={classes['select-container']} onChange={handleChangeRoll}>
      <option value='admin'>어드민</option>
      <option value='manager'>매니저</option>
      <option value='viewer'>뷰어</option>
    </select>
  );
};

export default SelectBox;

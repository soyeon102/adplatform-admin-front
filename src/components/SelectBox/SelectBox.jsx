import classes from './SelectBox.module.css';

const SelectBox = () => {
  return (
    <select className={classes['select-container']}>
      <option value='admin'>어드민</option>
      <option value='manager'>매니저</option>
      <option value='viewer'>뷰어</option>
    </select>
  );
};

export default SelectBox;

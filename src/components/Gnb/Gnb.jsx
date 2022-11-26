import { useState } from 'react';
import classes from './Gnb.module.css';
import SelectBox from '../SelectBox/SelectBox';

const Gnb = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const handleGnbClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <nav className={classes['gnb-container']}>
      <div className={classes['nav-contents']}>
        <div className={`${classes['nav-left']} ${classes.logo}`}>
          Wisebirds
        </div>
        <div
          className={
            activeTab === 0
              ? `${classes['nav-left']} ${classes.active}`
              : classes['nav-left']
          }
          onClick={() => handleGnbClick(0)}
        >
          캠페인
        </div>
        <div
          className={
            activeTab === 1
              ? `${classes['nav-left']} ${classes.active}`
              : classes['nav-left']
          }
          onClick={() => handleGnbClick(1)}
        >
          사용자
        </div>
      </div>
      <div className={classes['nav-contents']}>
        <div className={classes.user}>user email</div>
        <SelectBox />
      </div>
    </nav>
  );
};

export default Gnb;

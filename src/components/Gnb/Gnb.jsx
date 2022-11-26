import { useEffect, useState } from 'react';
import classes from './Gnb.module.css';
import SelectBox from '../SelectBox/SelectBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from '../../redux/modules/authReducer';

const Gnb = ({ activeTab, onClick }) => {
  const dispatch = useDispatch();

  const { isLoading, authUser, roll } = useSelector((state) => state.auth);

  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

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
          onClick={() => onClick(0)}
        >
          캠페인
        </div>
        {roll === 'admin' && (
          <div
            className={
              activeTab === 1
                ? `${classes['nav-left']} ${classes.active}`
                : classes['nav-left']
            }
            onClick={() => onClick(1)}
          >
            사용자
          </div>
        )}
      </div>
      <div className={classes['nav-contents']}>
        <div
          className={classes.user}
          onClick={() => setShowUserInfo(!showUserInfo)}
        >
          {authUser.email}
          {showUserInfo && (
            <div className={classes['user-info']}>
              <p>{authUser.name}</p>
              <p>{authUser.email}</p>
              <p>{authUser.company.name}</p>
            </div>
          )}
        </div>
        <SelectBox />
      </div>
    </nav>
  );
};

export default Gnb;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/modules/usersReducer';
import Row from '../Row/Row';
import commonClass from '../../assets/css/Common.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <table className={commonClass.table}>
      <colgroup>
        <col style={{ width: '30%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <thead className={commonClass.thead}>
        <tr>
          <th className={commonClass.tal}>아이디</th>
          <th className={commonClass.tal}>이름</th>
          <th className={commonClass.tal}>마지막 로그인 일시</th>
          <th className={commonClass.tac}>수정</th>
        </tr>
      </thead>
      <tbody>
        {users.content?.map((user) => (
          <Row key={user.id} content={user} isUser={true} />
        ))}
      </tbody>
    </table>
  );
};

export default Users;

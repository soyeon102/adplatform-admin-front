import { useEffect, useState } from 'react';
import './app.css';
import Gnb from './components/Gnb/Gnb';
import Campaigns from './components/Campaigns/Campaigns';
import Users from './components/Users/Users';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Input from './components/Input/Input';
import { useDispatch } from 'react-redux';
import { postUser } from './redux/modules/usersReducer';

function App() {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [inputMsg, setInputMsg] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
  });
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
    last_login_at: '2022-11-14T07:37:24.914Z',
  });

  const handleGnbClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  const handleCreateUser = () => {
    setShowModal(true);
  };

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const createUser = () => {
    // email 체크
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (form.email === '' || !emailRegex.test(form.email)) {
      form.email === ''
        ? setInputMsg((prev) => {
            return {
              ...prev,
              email: '아이디(이메일)를 입력하세요.',
            };
          })
        : setInputMsg((prev) => {
            return {
              ...prev,
              email: '올바른 이메일 주소를 입력하세요.',
            };
          });
    } else {
      setInputMsg((prev) => {
        return {
          ...prev,
          email: '',
        };
      });
    }

    // password 체크
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/;

    if (form.password === '' || !passwordRegex.test(form.password)) {
      form.password === ''
        ? setInputMsg((prev) => {
            return {
              ...prev,
              password: '비밀번호를 입력하세요.',
            };
          })
        : setInputMsg((prev) => {
            return {
              ...prev,
              password: '8~15자 영문, 숫자, 특수문자를 사용하세요',
            };
          });
    } else {
      setInputMsg((prev) => {
        return {
          ...prev,
          password: '',
        };
      });
    }

    // name 체크
    const nameRegex = /^(?=.*[a-z가-힣])[a-z가-힣]{1,16}$/;

    if (form.name === '' || !nameRegex.test(form.name)) {
      form.name === ''
        ? setInputMsg((prev) => {
            return {
              ...prev,
              name: '이름을 입력하세요.',
            };
          })
        : setInputMsg((prev) => {
            return {
              ...prev,
              name: '이름을 올바르게 입력하세요. (숫자, 특수문자, 공백 입력불가)',
            };
          });
    } else {
      setInputMsg((prev) => {
        return {
          ...prev,
          name: '',
        };
      });
    }

    // password2 체크
    if (form.password2 === '' || form.password !== form.password2) {
      form.password2 === ''
        ? setInputMsg((prev) => {
            return {
              ...prev,
              password2: '비밀번호를 입력하세요.',
            };
          })
        : setInputMsg((prev) => {
            return {
              ...prev,
              password2: '비밀번호가 일치하지 않습니다.',
            };
          });
    } else {
      setInputMsg((prev) => {
        return {
          ...prev,
          password2: '',
        };
      });
    }

    if (
      form.email !== '' &&
      form.name !== '' &&
      form.password !== '' &&
      form.password2 !== '' &&
      inputMsg.email === '' &&
      inputMsg.name === '' &&
      inputMsg.password === '' &&
      inputMsg.password2 === ''
    ) {
      dispatch(postUser(form));
    }
  };

  useEffect(() => {
    if (!showModal) {
      setForm({
        email: '',
        name: '',
        password: '',
        password2: '',
        last_login_at: '2022-11-14T07:37:24.914Z',
      });

      setInputMsg({
        email: '',
        name: '',
        password: '',
        password2: '',
        last_login_at: '2022-11-14T07:37:24.914Z',
      });
    }
  }, [showModal]);

  return (
    <>
      <div className='app'>
        <Gnb activeTab={activeTab} onClick={handleGnbClick} />
        {activeTab === 0 && (
          <>
            <h2 className='title'>캠페인 관리</h2>
            <Campaigns />
          </>
        )}
        {activeTab === 1 && (
          <>
            <h2 className='title'>사용자 관리</h2>
            <div className='button-container'>
              <Button text='생성' handleButtonClick={handleCreateUser} />
            </div>
            <Users />
          </>
        )}
      </div>
      {showModal && (
        <Modal handleClose={() => setShowModal(false)} headerText='사용자 생성'>
          <form>
            <Input
              label='아이디'
              inputId='email'
              msg={inputMsg.email}
              handleChangeInput={handleChangeInput}
            />
            <Input
              label='비밀번호'
              inputId='password'
              type='password'
              placeholder='영문, 숫자, 특수문자 조합 8~15자'
              msg={inputMsg.password}
              handleChangeInput={handleChangeInput}
            />
            <Input
              label='비밀번호 확인'
              inputId='password2'
              type='password'
              msg={inputMsg.password2}
              handleChangeInput={handleChangeInput}
            />
            <Input
              label='이름'
              inputId='name'
              msg={inputMsg.name}
              handleChangeInput={handleChangeInput}
            />
          </form>
          <div className='btn-group'>
            <Button
              text='취소'
              isBlue={false}
              handleButtonClick={() => setShowModal(false)}
            />
            <Button text='생성' handleButtonClick={createUser} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;

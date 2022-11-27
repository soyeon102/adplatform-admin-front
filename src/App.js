import { useState } from 'react';
import './app.css';
import Gnb from './components/Gnb/Gnb';
import Campaigns from './components/Campaigns/Campaigns';
import Users from './components/Users/Users';

function App() {
  const [activeTab, setActiveTab] = useState(-1);

  const handleGnbClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
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
          <Users />
        </>
      )}
    </div>
  );
}

export default App;

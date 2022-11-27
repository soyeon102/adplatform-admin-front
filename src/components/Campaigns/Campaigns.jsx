import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from '../../redux/modules/campaignsReducer';
import Row from '../Row/Row';
import commonClass from '../../assets/css/Common.module.css';

const Campaigns = () => {
  const dispatch = useDispatch();
  const { isLoading, campaigns } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <table className={commonClass.table}>
      <colgroup>
        <col style={{ width: '5%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '18%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
      </colgroup>
      <thead className={commonClass.thead}>
        <tr>
          <th className={commonClass.tac}>상태</th>
          <th className={commonClass.tal}>캠페인명</th>
          <th className={commonClass.tal}>캠페인 목적</th>
          <th className={commonClass.tar}>노출수</th>
          <th className={commonClass.tar}>클릭수</th>
          <th className={commonClass.tar}>CTR</th>
          <th className={commonClass.tar}>동영상조회수</th>
          <th className={commonClass.tar}>VTR</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.content?.map((campaign) => (
          <Row key={campaign.id} content={campaign} />
        ))}
      </tbody>
    </table>
  );
};

export default Campaigns;

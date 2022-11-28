import Switch from '../Switch/Switch';
import commonClass from '../../assets/css/Common.module.css';
import classes from './Row.module.css';
import { useDispatch } from 'react-redux';
import { changeCampaignStatus } from '../../redux/modules/campaignsReducer';

const Row = ({ content, isUser }) => {
  const dispatch = useDispatch();

  const changeNum = (num) => {
    return Math.round(num * 100);
  };

  const changeDateFormat = (val) => {
    const date = new Date(val).toISOString().split('T')[0];
    const time = new Date(val).toTimeString().split(' ')[0];

    return `${date} ${time}`;
  };

  const changeObjective = (val) => {
    switch (val) {
      case 'WEBSITE_TRAFFIC':
        return '웹사이트 트래픽';
      case 'LEAD':
        return '리드';
      case 'VIDEO':
        return '동영상 조회';
      default:
        return '없음';
    }
  };

  const handleSwitchClick = (id, enabled) => {
    dispatch(changeCampaignStatus({ id: id, enabled: enabled }));
  };

  return isUser ? (
    <tr className={classes.row}>
      <td>{content.email}</td>
      <td>{content.name}</td>
      <td>{changeDateFormat(content.last_login_at)}</td>
      <td className={commonClass.tac}>
        <button className={classes['modify-btn']}>수정</button>
      </td>
    </tr>
  ) : (
    <tr className={classes.row}>
      <td className={commonClass.tac}>
        <Switch
          status={content.enabled}
          handleSwitchClick={() =>
            handleSwitchClick(content.id, content.enabled)
          }
        />
      </td>
      <td className={commonClass.tal}>{content.name}</td>
      <td className={commonClass.tal}>
        {changeObjective(content.campaign_objective)}
      </td>
      <td className={commonClass.tar}>
        {content.impressions.toLocaleString()}
      </td>
      <td className={commonClass.tar}>{content.clicks.toLocaleString()}</td>
      <td className={commonClass.tar}>{`${changeNum(content.ctr)}%`}</td>
      <td className={commonClass.tar}>{content.video_views}</td>
      <td className={commonClass.tar}>{`${changeNum(content.vtr)}%`}</td>
    </tr>
  );
};

export default Row;

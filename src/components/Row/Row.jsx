import commonClass from '../../assets/css/Common.module.css';
import classes from './Row.module.css';

const Row = ({ content, isUser }) => {
  const changeNum = (num) => {
    return Math.round(num * 100);
  };

  return isUser ? (
    <tr className={classes.row}>
      <td>{content.email}</td>
      <td>{content.name}</td>
      <td>{content.last_login_at}</td>
      <td className={commonClass.tac}>
        <button className={classes['modify-btn']}>수정</button>
      </td>
    </tr>
  ) : (
    <tr className={classes.row}>
      <td className={commonClass.tac}>{content.enabled ? 'true' : 'false'}</td>
      <td className={commonClass.tal}>{content.name}</td>
      <td className={commonClass.tal}>{content.campaign_objective}</td>
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

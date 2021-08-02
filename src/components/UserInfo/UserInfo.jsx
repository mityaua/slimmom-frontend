import { useDispatch, useSelector } from 'react-redux';
import { getUserNickName } from '../../redux/user/user_selector';
import { logOut } from '../../redux/auth/auth_operation';
import { resetDayInfo } from '../../redux/day/day_operation';

// import UserAvatar from '../UserAvatar';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());
  const reset = () => dispatch(resetDayInfo());
  const Nickname = useSelector(getUserNickName);

  const handleClick = () => {
    onLogout();
    reset();
  };

  return (
    <div className={styles.userInfo}>
      {/* <UserAvatar name={Nickname} size={'50px'} /> */}
      <span className={styles.userNickname}>{Nickname}</span>
      <button className={styles.button} type="button" onClick={handleClick}>
        Выйти
      </button>
    </div>
  );
};

export default UserInfo;

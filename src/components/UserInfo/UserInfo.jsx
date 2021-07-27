import styles from './UserInfo.module.css';
import { logOut } from '../../redux/auth/auth_operation';

import { useDispatch } from 'react-redux';
const UserInfo = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());
  // const onLogout = () => null;

  return (
    <div className={styles.userInfo}>
      <span className={styles.userNickname}>Nickname</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

export default UserInfo;

import { useDispatch, useSelector } from 'react-redux';
import { getUserNickName } from '../../redux/auth/auth_selector';
import { logOut } from '../../redux/auth/auth_operation';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());
  const Nickname = useSelector(state => getUserNickName(state));
  // const onLogout = () => null;

  return (
    <div className={styles.userInfo}>
      <span className={styles.userNickname}>{Nickname}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

export default UserInfo;

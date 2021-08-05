import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNickName } from '../../redux/user/user_selector';
import { logOut } from '../../redux/auth/auth_operation';

import UserAvatar from '../UserAvatar';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());
  const Nickname = useSelector(getUserNickName);
  const [size, setSize] = useState(window.innerWidth < 767 ? '30px' : '40px');

  window.onresize = () => {
    return setSize(window.innerWidth < 767 ? '30px' : '40px');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.userAvatarBlock}>
        <div className={styles.userAvatar}>
          <UserAvatar name={Nickname} size={size} />
        </div>
      </div>
      <span className={styles.userNickname}>{Nickname}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

export default UserInfo;

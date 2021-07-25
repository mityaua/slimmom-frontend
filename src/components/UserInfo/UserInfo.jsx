import styles from './UserInfo.module.css';

const UserInfo = () => {
  const onLogout = () => null;

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

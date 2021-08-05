import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

import { team } from '../../utils/team';

import styles from './UserAvatar.module.css';
import 'react-toastify/dist/ReactToastify.css';

const UserAvatar = ({ name, size }) => {
  const avatarClick = () => {
    name &&
      toast.success(
        <a
          href="https://github.com/mityaua/slimmom-frontend"
          target="_blank"
          rel="noreferrer"
          title="Над проектом работали..."
          alt="Разработчики проекта"
          className={styles.avatar__link}
        >{`${team[Math.floor(Math.random() * team.length)]}`}</a>,
      );
  };

  return (
    <Avatar
      className={styles.avatar}
      name={name}
      alt="user avatar"
      size={size}
      round
      onClick={avatarClick}
      value="?"
    />
  );
};

export default UserAvatar;

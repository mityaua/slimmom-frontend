import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

import styles from './UserAvatar.module.css';
import 'react-toastify/dist/ReactToastify.css';

const UserAvatar = ({ name, size }) => {
  const avatarClick = () => {
    name &&
      toast.success(`🦀 Кто проживает на дне бекенда?`, {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

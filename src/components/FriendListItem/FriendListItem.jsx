import clsx from "clsx";
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
  return (
 <li className={css.friendListItem}>
  <img className={css.friendListItemAvatar} src={avatar} alt="Avatar" width="96" />
  <p className={css.friendListItemName }>{name }</p>
      
      <p className=
        {clsx(
        css.friendListItemOnline,
    {[css.offline]:!isOnline,}
      )}
      >
        { isOnline ? 'Online' : 'Ofline'}</p>
</li>

  )
}

export default FriendListItem
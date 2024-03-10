import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
   <div className={css.container}>
  <div className={css.user}>
    <img className={css.picture}
      src={image}
      alt="User avatar"
    />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{ tag}</p>
        <p className={css.userLocation}>{ location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span>Followers</span>
      <span className={css.statsItemValue}>{ followers}</span>
    </li>
    <li className={css.statsItem}>
      <span>Views</span>
      <span className={css.statsItemValue}>{ views}</span>
    </li>
    <li className={css.statsItem}>
      <span>Likes</span>
      <span className={css.statsItemValue}>{ likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile

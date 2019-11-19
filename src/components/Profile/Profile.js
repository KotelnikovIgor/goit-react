import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={s.profile__items}>
      <div className={s.profile__item}>
        <img
          src={user.avatar}
          alt="user avatar"
          className={s.profile__avatar}
          width="128"
          height="128"
        />
        <p className={s.profile__name}>{user.name}</p>
        <p className={s.profile__tag}>{`@${user.tag}`}</p>
        <p className={s.profile__location}>{user.location}</p>
      </div>

      <ul className={s.profile__stats}>
        <li className={s.profile__list_item}>
          <span className={s.profile__label}>Followers</span>
          <span className={s.profile__quantity}>{user.stats.followers}</span>
        </li>
        <li className={s.profile__list_item}>
          <span className={s.profile__label}>Views</span>
          <span className={s.profile__quantity}>{user.stats.views}</span>
        </li>
        <li className={s.profile__list_item}>
          <span className={s.profile__label}>Likes</span>
          <span className={s.profile__quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  user: PropTypes.shape({
    name: '',
    tag: '',
    location: '',
    avatar: '',
    stats: PropTypes.shape({
      followers: 0,
      views: 0,
      likes: 0,
    }),
  }),
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;

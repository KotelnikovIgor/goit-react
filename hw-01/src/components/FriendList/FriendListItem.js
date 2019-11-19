import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ friendsData }) => (
  <li
    className={
      friendsData.isOnline === true ? s.friends__item : s.friends__item_none
    }
  >
    <span className="status" />
    <img
      className={s.friends__avatar}
      src={friendsData.avatar}
      alt=""
      width="48"
    />
    <p className={s.friends__name}>{friendsData.name}</p>
  </li>
);

FriendListItem.defaultProps = {
  friendsData: PropTypes.shape({
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default FriendListItem;

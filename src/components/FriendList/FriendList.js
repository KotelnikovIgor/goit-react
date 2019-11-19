import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friend__list}>
    {friends.length > 0 &&
      friends.map(el => <FriendListItem key={el.id} friendsData={el} />)}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FriendList;

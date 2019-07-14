import React from 'react';
import { string } from 'prop-types';

import { CenteredDiv } from '../Layout';

import './Profile.css';

const ProfileMenu = ({ username, pictureUrl }) => (
  <CenteredDiv className="menu-profile-container">
    <div className="menu-username">{username}</div>
    <img src={pictureUrl} alt="user avatar" className="menu-user-picture" />
  </CenteredDiv>
);

ProfileMenu.propTypes = {
  username: string.isRequired,
  pictureUrl: string.isRequired,
};

export default ProfileMenu;

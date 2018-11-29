import React from 'react';
import PropTypes from 'prop-types';

import OneUserData from '../OneUserData/OneUserData';

export default function UserDataTable(props) {
  const { allUsers, openUserCard } = props;
  return (
    <tbody>
      {allUsers.map((user) => (
        <OneUserData openUserCard={ openUserCard } key={ user.phone } user={ user } />
      ))}
    </tbody>
  );
}

UserDataTable.propTypes = {
  allUsers: PropTypes.array.isRequired,
  openUserCard: PropTypes.func.isRequired,
}

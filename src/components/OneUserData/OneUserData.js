import React from 'react';
import PropTypes from 'prop-types';

import './OneUserData.css'

export default function OrderUserData(props) {
  const { user, openUserCard } = props;

  const handleClick = (event) => {
    openUserCard(user);
  };

  return (
    <tr onClick = { handleClick }>
      <td>{ user.id }</td>
      <td>{ user.firstName }</td>
      <td>{ user.lastName }</td>
      <td>{ user.email }</td>
      <td>{ user.phone }</td>
    </tr>
  );
}

OrderUserData.propTypes = {
  user: PropTypes.object.isRequired,
  openUserCard: PropTypes.func.isRequired,
}

import React from 'react';
import PropTypes from 'prop-types';

export default function AdditionalUserData(props) {
  const { user } = props;
  return (
    <div className="col-sm-12 alert alert-primary" id="userCard">
      <p>
        <span>Выбран пользователь </span>
        <b>{ user.firstName + ' ' + user.lastName }</b>
      </p>
      <p>
        <span>Описание: </span>
        <textarea className="form-control">
          {user.description}
        </textarea>
      </p>
      <p>
        <span>Адрес проживания: </span>
        <b>
          {user.address.streetAddress}
        </b>
      </p>
      <p>
        <span>Город: </span>
        <b>
          {user.address.city}
        </b>
      </p>
      <p>
        <span>Провинция/штат: </span>
        <b>
          {user.address.state}
        </b>
      </p>
      <p>
        <span>Индекс: </span>
        <b>
          {user.address.zip}
        </b>
      </p>
    </div>
  );
}

AdditionalUserData.propTypes = {
  user: PropTypes.object.isRequired,
}

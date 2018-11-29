import React from 'react';
import PropTypes from 'prop-types';

export default function TableSortHeader(props) {
  const { sorts, changeSort } = props;
  return (
    <thead>
      <tr>
        <th>
          <button className="btn btn-link" onClick = { changeSort } value="isSortedByIdAsc">ID</button>
          {
            (sorts.isSortedByIdAsc !== undefined) &&
            (<i className={ sorts.isSortedByIdAsc ? 'fa fa-sort-up' : 'fa fa-sort-down' }></i>)
          }
        </th>
        <th>
          <button className="btn btn-link" onClick = { changeSort } value="isSortedByNameAsc">First Name</button>
          {
            (sorts.isSortedByNameAsc !== undefined) &&
            (<i className={ sorts.isSortedByNameAsc ? 'fa fa-sort-up' : 'fa fa-sort-down' }></i>)
          }
        </th>
        <th>
          <button className="btn btn-link" onClick = { changeSort } value="isSortedByLastNameAsc">Last Name</button>
          {
            (sorts.isSortedByLastNameAsc !== undefined) &&
            (<i className={ sorts.isSortedByLastNameAsc ? 'fa fa-sort-up' : 'fa fa-sort-down' }></i>)
          }
        </th>
        <th>
          <button className="btn btn-link" onClick = { changeSort } value="isSortedByMailAsc">E-mail</button>
          {
            (sorts.isSortedByMailAsc !== undefined) &&
            (<i className={ sorts.isSortedByMailAsc ? 'fa fa-sort-up' : 'fa fa-sort-down' }></i>)
          }
        </th>
        <th>
          <button className="btn btn-link" onClick = { changeSort } value="isSortedByPhoneAsc">Phone</button>
          {
            (sorts.isSortedByPhoneAsc !== undefined) &&
            (<i className={ sorts.isSortedByPhoneAsc ? 'fa fa-sort-up' : 'fa fa-sort-down' }></i>)
          }
        </th>
      </tr>
    </thead>
  );
}

TableSortHeader.propTypes = {
  sorts: PropTypes.object.isRequired,
  changeSort: PropTypes.func.isRequired,
}

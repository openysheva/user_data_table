import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

export default function Pagination(props) {
  const { userData, setPagePagination, page } = props;
  const pagesInPagination = Math.ceil(userData.length / 30);
  let paginationList = [];

  for(let paginateIndex = 0; paginateIndex < pagesInPagination; paginateIndex++) {
    paginationList[paginateIndex] = paginateIndex + 1;
  }

  return (
      <nav>
        <ul className="pagination">
          {
            paginationList.map((paginationPage) => (
              <li key={paginationPage} className={page == paginationPage ? "page-item active" : "page-item"}>
                <span className="page-link" onClick = { setPagePagination } id={ paginationPage }>
                  { paginationPage }
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    );
}

Pagination.propTypes = {
  userData: PropTypes.array,
  setPagePagination: PropTypes.func.isRequired,
}

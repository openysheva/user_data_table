import React from 'react';
import PropTypes from 'prop-types';

import './TopDataAndSearch.css';

export default function TopDataAndSearch(props) {
    const {
      changeData,
      changeSearchQuery,
      filters
    } = props;

    return (
      <div className="container pl-2 pr-2">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div className="col-sm-8">
            <button
              onClick = { changeData }
              value="small-data"
              className = { filters.data === 'small-data' ? 'btn btn-outline-primary' : 'btn btn-light' }
            >
              Малые данные
            </button>

            <button
              onClick = { changeData }
              value="big-data"
              className = { filters.data === 'big-data' ? 'btn btn-outline-primary mx-1' : 'btn btn-light mx-1' }
            >
              Большие данные
            </button>
          </div>

          <div className="input-group col-sm-4">
            <div className="input-group-prepend">
              <span className="input-group-text fa fa-search"></span>
            </div>
            <input
              className="form-control"
              type="text"
              id="search"
              placeholder="введите данные пользователя"
              aria-label="Search"
              onChange = { changeSearchQuery }
              value = { filters.search }
            />
          </div>
        </nav>
      </div>
    );
}

TopDataAndSearch.propTypes = {
  changeData: PropTypes.func.isRequired,
  changeSearchQuery: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
}

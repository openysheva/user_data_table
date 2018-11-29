import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import _ from 'lodash';
import $ from "jquery";

import TopDataAndSearch from './components/TopDataAndSearch/TopDataAndSearch';
import TableSortHeader from './components/TableSortHeader/TableSortHeader';
import UserDataTable from './components/UserDataTable/UserDataTable';
import AdditionalUserData from './components/AdditionalUserData/AdditionalUserData';
import Pagination from './components/Pagination/Pagination'

import { getUserData } from './api';
import getSortedData from './helpers/getSortedData';
import getSearchUser from './helpers/getSearchUser';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {
        data: 'small-data',
      },
      search: null,
      sorts: {},
      userData: [],
      userPaginatedData: [],
      userChangedData: [],
      isLoading: false,
      selectedUser: null,
      page: 1,
    }

    this.changeData = this.changeData.bind(this);
    this.changeSearchQuery = this.changeSearchQuery.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.openUserCard = this.openUserCard.bind(this);
    this.setPagePagination = this.setPagePagination.bind(this);
  }

  componentDidMount() {
    this.changeUserTable();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.filters, this.state.filters)) {
      this.changeUserTable();
    }
  }

  changeData(event) {
    const eventTargetValue =  event.target.value;
    this.setState((prevState) => ({
      sorts: {},
      filters: {
        ...prevState.filters,
        data: eventTargetValue,
      }
    }));
  }

  changeSearchQuery(event) {
    const eventTargetValue =  event.target.value;
    this.setState((prevState) => ({
      search: eventTargetValue,
      sorts: {},
    }), this.setSearchAndSorts);
  }

  changeSort(event) {
    const eventTargetValue =  event.target.value;

    this.setState((prevState) => {
      if (prevState.sorts[eventTargetValue]) {
        return { sorts: {
          [eventTargetValue]: false,
          }
        };
      } else {
        return { sorts: {
          [eventTargetValue]: true,
          }
        };
      }
    }, this.setSearchAndSorts);
  };

  changeUserTable() {
    this.setState({
      isLoading: true,
    });
    
    $('#search').val('');

    getUserData(this.state.filters).then((res) => {
      let userData = res.data;
      let userPpaginatedData = userData.slice(0, 30);

      this.setState({
        userData: userData,
        userPaginatedData: userPpaginatedData,
        userChangedData: userPpaginatedData,
        isLoading: false,
        selectedUser: null,
        search: '',
        sorts: {},
        page: 1,
      });
    });
  }

  openUserCard(user) {
    this.setState((prevState) => {
      if (!_.isEqual(prevState.selectedUser, user)) {
        return {selectedUser: user}
      }
      return {selectedUser: null}
    }, () => {
      setTimeout(() => {
        const target = $('#userCard');

        if (!target.length) {
          return;
        }

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
      }, 300)

    });
  }

  setSearchAndSorts() {
    this.setState({
      isLoading: true,
    });

    let searchQuery = this.state.search;
    let userPaginatedData = this.state.userPaginatedData;
    let userChangedData = this.state.userChangedData;

    if (JSON.stringify(this.state.sorts) !== "{}") {
      userChangedData = getSortedData(userPaginatedData, this.state.sorts);
    }

    if (searchQuery || searchQuery === '') {
      userChangedData = getSearchUser(searchQuery, userPaginatedData);
    }

    this.setState({
      userChangedData: userChangedData,
      isLoading: false
    });
  }

  setPagePagination(event) {
    const elementFrom = (event.target.id - 1) * 30;
    const elementTo = event.target.id * 30;
    let userPaginatedData = this.state.userPaginatedData;
    let userData = this.state.userData;

    userPaginatedData = userData.slice(elementFrom, elementTo);

    this.setState({
      sorts: {},
      page: event.target.id,
      userPaginatedData: userPaginatedData,
      userChangedData: userPaginatedData,
      selectedUser: null,
    });
  }

  render() {
    const {filters, sorts, selectedUser, userChangedData} = this.state;

    return (
      <div className="App">
        <TopDataAndSearch
          changeData={ this.changeData }
          changeSearchQuery={ this.changeSearchQuery }
          filters={ filters }
        />
        <div className="container pl-2 pr-2 my-3">
          <table className="table table-striped table-light">
            <TableSortHeader changeSort={ this.changeSort } sorts={ sorts } />
            {this.state.isLoading && (
              <tbody>
                <tr>
                  <td colSpan="5">
                    <div className="my-5" id="loader"></div>
                  </td>
                </tr>
              </tbody>
            )}
            {!this.state.isLoading && (
              <UserDataTable openUserCard={ this.openUserCard } allUsers={ userChangedData } />
            )}
          </table>
          {selectedUser && (
            <AdditionalUserData user={ selectedUser } />
          )}
          {!this.state.isLoading && !this.state.search && (
            <Pagination
              setPagePagination={ this.setPagePagination }
              userData={ this.state.userData }
              page = { this.state.page }
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

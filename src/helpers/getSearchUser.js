export default function getSearchUser(searchQuery, userData) {

  let usersWithSearch = [];

  searchQuery = searchQuery + '';

  if (searchQuery === '') return userData;

  userData.forEach((user) => {
    if (
      ((user.id + '').indexOf(searchQuery) !== -1) ||
      ((user.firstName + '').indexOf(searchQuery) !== -1) ||
      ((user.lastName + '').indexOf(searchQuery) !== -1) ||
      ((user.email + '').indexOf(searchQuery) !== -1) ||
      ((user.phone + '').indexOf(searchQuery) !== -1)
    ) {
      usersWithSearch.push(user);
    }
  });

  return usersWithSearch;
}

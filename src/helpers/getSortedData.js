export default function getSortedData(userData, sorts) {

  const keysInUserData = {
    isSortedByIdAsc: 'id',
    isSortedByNameAsc: 'firstName',
    isSortedByLastNameAsc: 'lastName',
    isSortedByMailAsc: 'email',
    isSortedByPhoneAsc: 'phone',
  }

  for (let key in sorts) {
    const userDataKey = keysInUserData[key];

    if (sorts[key] === true)  {
      return userData.sort((a,b) => {
        if (a[userDataKey] > b[userDataKey]) {
          return 1;
        }

        if (a[userDataKey] < b[userDataKey]) {
          return -1;
        }

        return 0;
      });
    } else {
      return userData.sort((a,b) => {
        if (a[userDataKey] < b[userDataKey]) {
          return 1;
        }

        if (a[userDataKey] > b[userDataKey]) {
          return -1;
        }

        return 0;
      });
    }
  }
}

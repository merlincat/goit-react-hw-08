import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from '../filters/selectors';

export const selectLoading = state => {
  return state.contacts.loading;
};
export const selectError = state => {
  return state.contacts.error;
};
export const selectContacts = state => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectFilterValue, selectContacts],
  (filterValue, contacts) => {
    filterValue = filterValue.toLowerCase().trim();

    if (!filterValue) {
      return contacts;
    }

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue) ||
        contact.number.includes(filterValue)
    );
  }
);

// export const selectNameFilter = state => {
// const filterValue = selectFilterValue(state).toLowerCase().trim();

// if (!filterValue) {
//   return selectContacts(state);
// }

// return selectContacts(state).filter(contact =>
//   contact.name.toLowerCase().includes(filterValue)
// );
// };

// const selectFilteredContacts = createSelector(selectSelf, state => state.value);

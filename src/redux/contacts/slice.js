import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(editContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const updatedContactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (updatedContactIndex !== -1) {
          state.items[updatedContactIndex] = action.payload;
        }
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;

// додавати id тут
// addContact(state, action) {
//       state.items.push(action.payload);
//     },

// reducers: {
//   addContact: {
//     reducer: (state, action) => {
//       state.items.push(action.payload);
//     },
//     prepare: newContact => {
//       return {
//         payload: {
//           ...newContact,
//           id: nanoid(4),
//         },
//       };
//     },
//   },
// },

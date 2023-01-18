import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact } from './contacts-operation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },

  // reducers: {
  //   addContact: (state, { payload }) => {
  //     state.contacts.push(payload);
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(({ id }) => id !== payload);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

import { createAction } from '@reduxjs/toolkit';

export const dayInfoRequest = createAction('day/dayInfoRequest');
export const dayInfoSuccess = createAction('day/dayInfoError');
export const dayInfoError = createAction('day/dayInfoError');

export const addProductRequest = createAction('contacts/addProductRequest');
export const addProductSuccess = createAction('contacts/addProductSuccess');
export const addProductError = createAction('contacts/addProductError');

export const deleteProductRequest = createAction(
  'contacts/deleteProductRequest',
);
export const deleteProductSuccess = createAction(
  'contacts/deleteProductSuccess',
);
export const deleteProductError = createAction('contacts/deleteProductError');

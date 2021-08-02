import { createAction } from '@reduxjs/toolkit';

export const dayInfoRequest = createAction('day/dayInfoRequest');
export const dayInfoSuccess = createAction('day/dayInfoSuccess');
export const dayInfoError = createAction('day/dayInfoError');

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

export const deleteProductRequest = createAction(
  'products/deleteProductRequest',
);
export const deleteProductSuccess = createAction(
  'products/deleteProductSuccess',
);
export const deleteProductError = createAction('products/deleteProductError');

export const reset = createAction('products/resetDayInfo');

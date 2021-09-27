import Types from "./types";
import Services from "../services/services";
import actionCall from '../../common/helper/actionCall';

export const fetchingCategories = () => ({ type: Types.GET_CATEGORIES_REQUEST, payload: false});
export const getCategories = (callback) => async dispatch =>
  actionCall({ service: () => Services.fetchCategories(), success: Types.GET_CATEGORIES_SUCCESS }, dispatch, callback);
export const fetchingProducts = () => ({ type: Types.GET_PRODUCTS_REQUEST, payload: false});
export const getProducts = (callback) => async dispatch =>
  actionCall({ service: () => Services.fetchProducts(), success: Types.GET_PRODUCTS_SUCCESS }, dispatch, callback);
export const clean = () => ({ type: Types.CLEAN });
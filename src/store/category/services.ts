import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/get-all-cat?page=1&size=12&sort=createdAt&order=ASC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addCategory(json));
      });
  }
);

export const addHelpCenter = createAsyncThunk(
  "categories/addCategory",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/get-helpcenter?page=1&size=12&sort=createdAt&order=ASC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addCategory(json));
      });
  }
);

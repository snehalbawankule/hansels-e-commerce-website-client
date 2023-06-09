import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const getWishlists = createAsyncThunk(
  "wishlist/getWishlists",
  async (_, { dispatch }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return fetch(
      `http://localhost:3001/getCurrent?page=1&size=12&sort=createdAt&order=DESC&userId=${currentUser.id}`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.getWishlist(json));
      });
  }
);

import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import CartCard from "./cart-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";

import { Divider } from "@mui/material";

import CartSubTotal from "./cart-subtotal";
import Cartlist from "./cart-list";
const Cart = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);

  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);

  return (
    <Grid container marginTop="80px" paddingRight="12px" spacing={2}>
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        lg={9}
        sx={{
          pl: isDesktop ? 5 : isTablet ? 0 : 1,
          pr: isDesktop ? 5 : isTablet ? 3 : 1,
        }}
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={8}
          lg={8}
          style={{
            paddingBottom: 20,

            paddingLeft: 10,
            fontWeight: "bold",
          }}
        >
          Shopping Cart ({cart.length} items)
        </Grid>
        <Divider style={{ marginBottom: 15 }}></Divider>
        <Cartlist cart={cart} />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <CartSubTotal />
      </Grid>
    </Grid>
  );
};

export default Cart;

import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import CartCard from "./cart-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import { AddToCardText, ProductName } from "./cart.styled";
import { Divider } from "@mui/material";
import { PostButton } from "../navbar/navbar.styled";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);
  const navigate = useNavigate();
  const navCheckout = () => {
    navigate("/checkout");
  };

  var totalPrice = 0,
    discount = 0,
    subTotal = 0,
    Delhivery = 99,
    saved = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].product.actualPrice;
    discount += (cart[i].product.actualPrice * cart[i].product.discount) / 100;
    discount = parseFloat(discount.toFixed(2));
    if (totalPrice - discount > 200) {
      saved = discount + Delhivery;
      Delhivery = 0;
    } else {
      saved = discount;
    }
  }
  subTotal = totalPrice - discount + Delhivery;

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
        sm={9}
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
        {cart.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              display="flex"
              key={index}
            >
              <CartCard post={post} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={10} sm={3} md={3} lg={3}>
        <Card sx={{ p: 2, backgroundColor: "white", mt: 5 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ProductName style={{ paddingTop: 0, fontWeight: 700 }}>
              PRICE DETAILS
            </ProductName>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="space-between"
          >
            <ProductName>Price ({cart.length}items)</ProductName>
            <ProductName>{totalPrice}</ProductName>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="space-between"
          >
            <ProductName>Discount</ProductName>
            <ProductName>-{discount}</ProductName>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="space-between"
          >
            <ProductName>Delhivery Charges</ProductName>
            <ProductName>{Delhivery}</ProductName>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="space-between"
          >
            <ProductName>Total Amount</ProductName>
            <ProductName>{subTotal}</ProductName>
          </Grid>
          <ProductName style={{ color: "green" }}>
            you will save {saved} on this order
          </ProductName>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ mt: isDesktop ? 0 : 3 }}
          >
            <PostButton
              style={{
                backgroundColor: "#FFD814",
                color: "black",
                borderColor: "#FFD814",
              }}
              onClick={navCheckout}
            >
              Proceed to Buy
            </PostButton>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cart;

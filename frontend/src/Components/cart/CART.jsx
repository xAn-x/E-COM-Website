import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import OverallView from "./OverallView";

import { useEffect } from "react";

import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Actions/CartActions";

import {useNavigate} from 'react-router-dom';

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

export default function CART() {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };


  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <ButtonWrapper>
              <StyledButton variant="contained" onClick={()=>navigate('/buySuccessfull')}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <OverallView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

import Profile from "./Profile";
import LoginDialogue from "../login/LoginDialogue";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Button, Box, Typography, Badge, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)((theme) => ({
  marginLeft: "85px",
  marginTop: "1px",
  backgroundColor: "#fff",
  color: "#252525",
  height: "35px",
  fontFamily: "monospace",
  borderRadius: "2px",
  textTransform: "none",
  boxShadow: "2px 2px 0px 1px",
  borderTop: "1px solid black",
  borderLeft: "1px solid black",

  // [theme.breakpoints.down("md")]:{

  // }
}));

const CartWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "5%",
  top: "10%",
  textAlign: "center",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: "20px",
    borderTop: "2px dotted black",
    borderDown: "2px dotted black",
    position: "static",
    paddingTop: "10px",
    width: "100%",
  },
}));

const ShoppingCart = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: "40px",
  color: "#ffffff",
  [theme.breakpoints.down("md")]: {
    color: "#252525",
    fontSize: "50px",
  },
}));

const CartText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "600",
  color: "#ffffff",
  [theme.breakpoints.down("md")]: {
    color: "#252525",
    fontSize: "16px",
    fontFamily: "cursive",
  },
}));

const CustomBadge = styled(Badge)`
  color: #ffffff;
`;


export default function CustomButtons({
  open,
  setOpen,
  account,
  setAccount,
  loggedIn,
  setLoggedIn,
}) {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      {account ? (
        <Profile
          account={account}
          setAccount={setAccount}
          // loggedIn={loggedIn}
          // setLoggedIn={setLoggedIn}
        />
      ) : (
        <LoginButton
          id="login-btn"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Login
        </LoginButton>
      )}

      <Link to="/cart">
        <CartWrapper id="cartWrapper">
          <CustomBadge badgeContent={cartItems?.length}>
            <ShoppingCart id="cartLogo" />
          </CustomBadge>
          <CartText id="cartText">Cart</CartText>
        </CartWrapper>
      </Link>

      <LoginDialogue open={open} setOpen={setOpen} setAccount={setAccount} />
    </Wrapper>
  );
}

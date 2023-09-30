import { useState } from "react";

import { Button, Box, Typography, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

import { addToCart, removeFromCart } from "../../Redux/Actions/CartActions";
import { useDispatch } from "react-redux";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
    marginLeft: "160px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const QuantityText = styled(Typography)`
  display: inline;
  font-size: 12px;
  font-family: inherit;
  font-weight: bold;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  // const buyNow = async () => {
  //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
  //     var information = {
  //         action: 'https://securegw-stage.paytm.in/order/process',
  //         params: response
  //     }
  //     post(information);
  // }

  const addItemToCart = () => {
    dispatch(addToCart(id, qty));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <Box>
        <QuantityText>Quantity:</QuantityText>
        <Box component="span">
          <Button>
            <RemoveIcon
              onClick={() => {
                if (qty === 1) return;
                setQty(qty - 1);
              }}
            />
          </Button>
          <Typography variant="span">{qty}</Typography>
          <Button>
            <AddIcon
              onClick={() => {
                if (qty === 5) return;
                setQty(qty + 1);
              }}
            />
          </Button>
        </Box>
      </Box>
      <br />
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb641b" }} variant="contained" onClick={()=>navigate('/buySuccessfull')}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;

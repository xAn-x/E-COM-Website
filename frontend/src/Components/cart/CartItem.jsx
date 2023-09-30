import { useState } from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px 10px;
  min-width: 30%;
  text-align: center;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

const CartItem = ({ item, removeItemFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <Component>
      <LeftComponent>
        <img
          src={item.url}
          style={{ height: "110px", width: 130, margin: "0px auto 20px auto" }}
        />
       <SmallText>Quantity:{item.quantity}</SmallText>
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{item.title.longTitle}</Typography>
        <SmallText>Seller:RetailNet</SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span">
            <strike>₹{item.price.mrp}</strike>
          </MRP>
          &nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove variant="outlined" onClick={() => removeItemFromCart(item.id)}>
          Remove
        </Remove>
      </Box>
    </Component>
  );
};

export default CartItem;

import { Box, styled } from "@mui/material";

import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
  align-items:strech
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#ffffff",
  width: "17%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide
          products={products}
          title={title}
          timer={timer}
        />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 230 , height:320} } />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;

import { useEffect } from "react";

//To get product details from the react store {{product-array}}
import { useDispatch, useSelector } from "react-redux";

//This is used to get get details from URL
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/Actions/ProductActions";

import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import { Box, Typography, styled, Grid } from "@mui/material";

// ====================================================================================

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0
  },
}));

const RightContainer = styled(Grid)((theme)=>({
  marginTop: '25px',
  paddingLeft:'35px',
  '& > p': {
    marginTop: '10px',
  },
}))

export default function DeatilView() {
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={12} xs={12} id="rightContainer">
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
}

import React from "react";
import { navData } from "../../Constants/data";

import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 100px !important",
  overflowX: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));

const Container = styled(Box)`
  padding: 0px 8px;
  text-align: center;
  margin:0px 5px
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

export default function Navbar() {
  return (
    <Component>
      {navData.map((temp,idx) => (
        <Container key={idx+1}>
          <img src={temp.url} style={{ height:"90px" , overflowX: "hidden" }} />
          <Text>{temp.text}</Text>
        </Container>
      ))}
    </Component>
  );
}

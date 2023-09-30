import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";

import LoginDialogue from "../login/LoginDialogue";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import {Box,styled} from "@mui/material";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

export default function Home() {
  const dispatch = useDispatch();

  // this getProducts is a state insode the redux store and not the function
  let get_products = useSelector((state) => state.getProducts);
  const { products } = get_products;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Component>
        <Banner />
        <LoginDialogue />

        {/* Products section */}
        <MidSlide products={products} title={`Deal of the day`} timer={true} />
        <MidSection />
        <Slide products={products} title={`Discounts for you`} timer={false} />
        <Slide products={products} title={`Suggestions`} timer={false} />
        <Slide products={products} title={`Trending Offers`} timer={false} />
        <MidSection />
        <Slide products={products} title={`Season top picks`} timer={false} />
        <Slide products={products} title={`Essentials`} timer={false} />
      </Component>
    </>
  );
}

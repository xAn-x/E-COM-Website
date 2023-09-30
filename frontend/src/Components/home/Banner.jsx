import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from "../../Constants/data";

import { styled } from "@mui/material";

// Used to make responsive banner
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 200,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 100,
  },
}));

export default function Banner() {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={4000}
      swipeable={false}
      dragable={false}
      infinite={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((banner) => (
        <Image
          src={banner.url}
          alt="banner"
          className="banner-item"
          key={banner.id}
        />
      ))}
    </Carousel>
  );
}

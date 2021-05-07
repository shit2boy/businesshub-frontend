import React, { memo } from "react";
import { Carousel } from "react-bootstrap/";
// import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const styles = {
    height: "40vh",
    width: "100%",
  };

  return (
    <div className="banner">
      <Carousel fade controls={false}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            style={styles}
            src="images/carousel/banner3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={styles}
            src="images/carousel/laptopsq.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            style={styles}
            src="images/carousel/samsung.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            style={styles}
            src="images/carousel/bannerTv.jpg"
            alt="Third slsaide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            style={styles}
            src="images/banner/bannerlabel.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default memo(Banner);

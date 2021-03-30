import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  background: url("https://res.cloudinary.com/femzy123/image/upload/c_scale,w_1360/v1610984969/creatives/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem;
  color: white;
`;

const Hero = () => {
  return (
    <Banner>
      <div className="flex justify-center">
        <h1 className="lg:text-5xl text-3xl text-center font-bold">
          Find and collaborate with the best creatives in the business
        </h1>
      </div>
    </Banner>
  );
};

export default Hero;

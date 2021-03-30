import React from 'react';
import styled from "styled-components";
import { breakpoints } from "../../constants";

const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;

  img {
    border-radius: 4px;
    width: 250px;
    height: 200px;
  }
`;

const CardFooter = styled.div`
  /* position: absolute; */
  background: #fff;
  padding: 10px;
  bottom: 0px;
  width: 100%;
  border-radius: 0 0 4px 4px;
`;

function Card({ image, name, profession, location }) {
  return (
    <>
      <Container>
        <img src={image} />
        <CardFooter>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm">{profession}</p>
          <p className="text-xs">{location}</p>
        </CardFooter>
      </Container>
    </>
  );
}

export { Card };

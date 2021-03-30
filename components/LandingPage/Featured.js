import React from 'react';
import styled from "styled-components";
import { breakpoints } from "../../constants";
import { Card } from "../../ui";
import Carousel from "react-elastic-carousel";
import creatives from "../../data/users.json"


const CardContainer = styled.div`
  display: grid;
  grid-template: repeat(1, auto) / repeat(1, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: ${breakpoints.MD}) {
    grid-template: repeat(1, auto) / repeat(4, 1fr);
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];



const Featured = () => {
  const users = creatives.data;

  return (
    <div className="lg:mt-12 mt-10 mx-auto lg:px-12 px-10 mb-10">
      <h2 className="text-2xl font-bold mb-8">Featured Creatives</h2>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000} showArrows={false}>

        {users.filter(user => user.featured).map(user => (
          <Card
            key={user.id}
            image={user.image}
            name={user.name}
            profession={user.profession}
            location={user.location.state + ', ' + user.location.country}
          />
        ))}

      </Carousel>
    </div>
  );
};

export default Featured;
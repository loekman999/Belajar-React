import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Img1 from "../images/img-9.jpg";
import Img2 from "../images/img-2.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1> Check Out These EPIC Destination! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img1}
              text="Explore the hidden waterfall deep inside teh Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Img2}
              text="Explore the hidden waterfall deep inside teh Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Img1 from "../images/img-9.jpg";
import Img2 from "../images/img-1.jpg";
import Img3 from "../images/img-3.jpg";
import Img4 from "../images/img-4.jpg";
import Vid1 from "../videos/movi1.mp4";

const Cards = () => {
  return (
    <div className="cards">
      <h1> Check Out These EPIC Destination! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text="Explore Mount Sindoro at night"
              label="Mountain Sindoro"
              path="/products"
            >
              <video
                src={Vid1}
                autoPlay
                loop
                muted
                className="cards__item__img"
              />
            </CardItem>
            <CardItem
              text="Explore Mount Sindoro at night"
              label="Mountain Sindoro"
              path="/products"
            >
              <img src={Img2} alt="Travel Loka" className="cards__item__img" />
            </CardItem>
            <CardItem
              text="Explore Mount Merapi"
              label="Mountain Merbabu"
              path="/products"
            >
              <img src={Img3} alt="Travel Loka" className="cards__item__img" />
            </CardItem>
            <CardItem
              text="Sunset Mount Lawu"
              label="Mountain Lawu"
              path="/products"
            >
              <img src={Img4} alt="Travel Loka" className="cards__item__img" />
            </CardItem>
            <CardItem
              text="The Pangrango Mountain Forest"
              label="Mountain Pangrango"
              path="/products"
            >
              <img src={Img1} alt="Travel Loka" className="cards__item__img" />
            </CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

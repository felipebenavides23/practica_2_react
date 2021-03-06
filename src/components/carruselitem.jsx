/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import icon_play_r from "../assets/static/play-icon.png";
import icon_plus_r from "../assets/static/plus-icon.png";

const CarruselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={icon_play_r}
          alt="Play Icon"
        />
        <img
          // eslint-disable-next-line jsx-quotes
          className="carousel-item__details--img"
          src={icon_plus_r}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {` ${year} ${contentRating}  ${duration}`}
      </p>
    </div>
  </div>
);

CarruselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarruselItem;

import React, { useState, useEffect } from 'react';
import Header from './Header';

let moon = {
  img: `image-moon.png`,
  title: 'moon',
  description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
  distance: '384,400',
  time: '3 days',
};

let mars = {
  img: `image-mars.png`,
  title: 'mars',
  description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
  distance: `225 MIL.`,
  time: '9 months',
};
let europa = {
  img: `image-europa.png`,
  title: 'europa',
  description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
  distance: '682 mil',
  time: '3 years',
};
let titan = {
  img: `image-titan.png`,
  title: 'titan',
  description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
  distance: '1.6 bil',
  time: '7 years',
};

const Destination = () => {
  // const [planet, setPlanet] = useState(moon.img);
  // const [title, setTitle] = useState(moon.title);
  // const [description, setDescription] = useState(moon.description);
  // const [distance, setDistance] = useState(moon.distance);
  // const [time, setTime] = useState(moon.time);

  const [planet, setPlanet] = useState(moon.img);
  const [title, setTitle] = useState(moon.title);
  const [description, setDescription] = useState(moon.description);
  const [distance, setDistance] = useState(moon.distance);
  const [time, setTime] = useState(moon.time);

  const setContent = ({ img, title, description, distance, time }) => {
    setPlanet(img);
    setTitle(title);
    setDescription(description);
    setDistance(distance);
    setTime(time);
  };
  return (
    <div className="destination clr-txt-100 ">
        <Header />
      <div className="destination__container centered">
        <h1 className="destintaion__category ff-secondary fw-light">
          <span>01</span> pick your destination
        </h1>
        <div className="destination__img">
          <img src={`../assets/destination/${planet}`} alt="" />
        </div>
        <ul className="destination__navigation fz-100 ff-secondary" role="list">
          <li
            className="destination__navigation--element"
            onClick={() => setContent(moon)}
          >
            moon
          </li>
          <li
            className="destination__navigation--element "
            onClick={() => setContent(mars)}
          >
            mars
          </li>
          <li
            className="destination__navigation--element "
            onClick={() => setContent(europa)}
          >
            europa
          </li>
          <li
            className="destination__navigation--element "
            onClick={() => setContent(titan)}
          >
            titan
          </li>
        </ul>

        <h1 className="destination__title fz-700 ff-primary">{title}</h1>
        <p className="destination__description fz-200 ff-secondary">
          {description}
        </p>
        <div className="destination__info">
          <h2 className="destination__info--title fz-100 fw-light clr-txt-200">
            avg. distance
          </h2>
          <h1 className="destination__info--number fz-300 ff-primary fw-light">
            {distance} km
          </h1>
        </div>
        <div className="destination__info">
          <h2 className="destination__info--title fz-100 fw-light clr-txt-200">
            est. travel time
          </h2>
          <h1 className="destination__info--number fz-300 ff-primary fw-light">
            {time}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Destination;

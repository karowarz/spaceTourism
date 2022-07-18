import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="destination">
      <button className="home__button button ff-primary">explore</button>
    </Link>
  );
};

export default Button;

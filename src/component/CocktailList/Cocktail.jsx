import './CocktailList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function Cocktail({ image, name, ingredient }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={image} alt="illustration" />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{ingredient}</p>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}
Cocktail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
};

export default Cocktail;
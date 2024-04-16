import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './ServiceCard.css';

function ServiceCard({ name, location, image, contact, address }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="service-card-container">
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>

        {/* Front Side */}
        <div className="service-card front" onClick={flipCard}>

          <div className="card-image-container">
            <img src={image} alt={name} className="card-image" />
          </div>

          <div className="card-details">
            <p className="card-name">{name}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="service-card card-back" onClick={flipCard}>
        <h3 className="card-title">{name}</h3>
          <div className="card-info-scrollable">
            <p className="card-info"><strong>Contact:</strong> {contact}</p>
            <p className="card-info"><strong>Address:</strong> {address}</p>
            <p className="card-info"><strong><a href={location} target="_blank" rel="noopener noreferrer">Click me to Locate</a></strong></p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default ServiceCard;

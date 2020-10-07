import React from 'react';

import './card.style.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt={props.avenger.name} src={`https://robohash.org/${props.avenger.id}?set=set5&size=180x180`} />
    <h2> { props.avenger.name } </h2>
    <p> { props.avenger.email } </p>
  </div>
)
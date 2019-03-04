import React from 'react';
import './Hand.scss';

const Hand = props =>  {

  console.log(props);

  const { cards } = props.hand;

  const cardElems = cards.map(card => <div className={`card-image ${card.code}`}></ div>);

  return (
    <div className="cards-wrapper">
      { cardElems }
    </div>
  );
}

export default Hand;

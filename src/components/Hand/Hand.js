import React from 'react';
import './Hand.scss';

const Hand = props =>  {

  const { hand, conditions, fitHandsClass } = props;
  const { cards,
    handPlayActions,
    is21,
    isBlackJack,
    isBusted,
    isDoubleable,
    isHittable,
    isSplittable,
    updateHandBet } = hand;

  if(isSplittable()) {
    handPlayActions.push({type: "SPLIT", action: () => console.log('SPLIT')});
  }
  if(isDoubleable()) {
    handPlayActions.push({type: "DOUBLE", action: () => console.log('DOUBLE')});
  }
  if(conditions.playerCanSurrrender) {
    handPlayActions.push({type: "SURRENDER", action: () => console.log('SURRENDER')});
  }
  if(isHittable()) {
    handPlayActions.push({type: "HIT", action: () => console.log('HIT')});
  }

  const cardElems = cards.map((card, i) =>
    <div key={`${card.code}-${i}`} className={`card-image ${card.code}`} />);

  return (
    <div className={`cards-wrapper ${fitHandsClass}`}>
      { cardElems }
      <span className={`hand-value ${fitHandsClass}`}>{ hand.getHandValue() }</span>
    </div>
  );
}

export default Hand;

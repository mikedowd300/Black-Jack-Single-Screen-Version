import React from 'react';
import stages from './../../utilities/gameStages.enum';
import './DealerHand.scss';

const DealerHand = props =>  {

  const { updateDealerHand, dealerHand, getStage } = props;
  const { cards, getHandValue } = dealerHand;

  const updateDealerCards = card => {
    updateDealerHand([...cards, card]);
  }

  const cardElems = cards && cards.map((card, i) =>
    <div
      key={`${card.code}-${i}-d`}
      className={`card-image dealer-card
      ${!card.isHoleCard ? card.code : "deck-back-2"}`}
    />);

  return (
    <div className={`dealer`}>
      <div className={`cards-wrapper`}>
      { cardElems }
      </div>
      <span className={`${(getStage() === stages.PLAY_DEALERS_HAND || getStage() === stages.PAYOUT) && 'show'}`}
      >{ getHandValue() }</span>
    </div>
  );
}

export default DealerHand;

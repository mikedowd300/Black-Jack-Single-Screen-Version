import React from 'react';
import DisplayOptions from './../DisplayOptions/DisplayOptions';
import gameStages from './../../utilities/gameStages.enum';
import './Hand.scss';

const Hand = props =>  {

  const { hand,
    conditions,
    fitHandsClass,
    getStage,
    updateHand } = props;

  const { cards,
    betSize,
    index,
    handPlayActions,
    is21,
    isBlackJack,
    isBusted,
    isDoubleable,
    isHittable,
    isSplittable,
    updateHandBet } = hand;

  const getOptions = () => {
    const options = [...handPlayActions];
    let hasNewOption = false;
    if(isSplittable() && options.filter(option => option.type === "SPLIT").length === 0) {
      options.push({type: "SPLIT", action: () => console.log('SPLIT')});
      hasNewOption = true;
    }
    if(isDoubleable() && options.filter(option => option.type === "DOUBLE").length === 0) {
      options.push({type: "DOUBLE", action: () => console.log('DOUBLE')});
      hasNewOption = true;
    }
    if(conditions.playerCanSurrrender && options.filter(option => option.type === "SURRENDER").length === 0) {
      options.push({type: "SURRENDER", action: () => console.log('SURRENDER')});
      hasNewOption = true;
    }
    if(isHittable() && options.filter(option => option.type === "HIT").length === 0) {
      options.push({type: "HIT", action: () => console.log('HIT')});
      hasNewOption = true;
    }

    if(hasNewOption) {
      updateHand({...hand, handPlayActions: options});
    }
  }

  updateCards = card => {
    updateHand({...hand, cards: [...cards, card]})
  }

  updateHandBetSize = amt => {
    updateHand({...hand, handBetSize: handBetSize + amt})
    updateBankRoll(amt);
  }

  getOptions();

  const displayOptionsElem = () => <DisplayOptions options={handPlayActions} playerHandle={'handle'} />

  const cardElems = cards.map((card, i) =>
    <div key={`${card.code}-${i}`} className={`card-image ${card.code}`} />);

  return (
    <div className={`hand-wrapper`}>
      <div className={`cards-wrapper ${fitHandsClass}`}>
        { cardElems }
        <span className={`hand-value ${fitHandsClass}`}>{ hand.getHandValue() }</span>
      </div>
    </div>
  );
}

export default Hand;

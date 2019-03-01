import React from 'react';
import gameStages from './../../utilities/gameStages.enum';
import './Player.scss';

const Player = props =>  {

  // bankRoll : 100,
  // wagerSize: 2,
  // name: '',
  // avatarClass: '',
  // hands:
  // activeHandIndex: 0,
  // insuranceOptionsData:

  const addPlayer = playerInfo => {
    updatePlayer({...props.player,
      handel: playerInfo.handel,
      avatarUrl: playerInfo.avatarUrl,
      bankRoll: playerInfo.bankRoll,
      wagerSize: playerInfo.wagerSize,
      handel: playerInfo.handel,
    });
  }

  // The only update to the activeHandIndex is to increase it
  // Does this apply even when a new hand is dealt?
  const increaseActiveHandIndex = () => {
    updatePlayer({...props.player, activeHandIndex: props.activeHandIndex++});
  }

  //  As a player increases or decreases the bet, these two values change simultaneously
  const updateBankRollAndWagerSize = amount => {
    updatePlayer({...props.player, bankRoll: props.bankRoll - amount, wagerSize: props.wager + amount });
  }

  const updateBankRoll = amount => {
    updatePlayer({...props.player, bankRoll: props.bankRoll + amount });
  }

  // The only update that can happen to updateInsuranceOptionData is that evenmoney can be added
  const updateInsuranceOptionData = () => {
    updatePlayer({...props.player, insuranceOptionsData: props.insuranceOptionsData.push({})});
  }

  const updateHands = hand => {
    updatePlayer({...props.player, hands: props.hands.push(hand) });
  }

  const updatePlayer = player => {
    props.updateSeat(player);
  }

  let innerElem = <div className="changeable">Bankroll and Wagersize</div>
  switch(props.stage) {
  case gameStages.INSURANCE:
    innerElem = <div className="changeable">Insurance Options</div>
    break;
  case gameStages.PLACE_YOUR_BETS:
    innerElem = <div className="changeable">increase/decrease bet</div>
    break;
  case gameStages.HAND_PLAY:
    innerElem = <div className="changeable">Play Youy Hand</div>
    break;
  default:
    innerElem = <div className="changeable">Bankroll and Wagersize</div>
}

  return (
    <div className="player">
      <div className="hands-wrapper">HANDS</div>
      { innerElem }
      <div className="avatar-wrapper">
        <img src={require('./../../assets/avatar-images/asia.jpg')} />
        <span>Handle</span>
      </div>
    </div>
  );
}

export default Player;

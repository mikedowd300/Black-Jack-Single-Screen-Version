import React from 'react';
import ManageBetsize from './../ManageBetsize/ManageBetsize';
import DisplayOptions from './../DisplayOptions/DisplayOptions';
import gameStages from './../../utilities/gameStages.enum';
import './Player.scss';

const Player = props =>  {

  const { player, actions } = props;
  const { updatePlayer, getStage } = actions;

  // The only update to the activeHandIndex is to increase it
  // Does this apply even when a new hand is dealt?
  const increaseActiveHandIndex = () => {
    updatePlayer({...player, activeHandIndex: player.activeHandIndex++});
  }

  //  As a player increases or decreases the bet, these two values change simultaneously
  const updateBankRollAndWagerSize = amount => {
    updatePlayer({...player, bankRoll: player.bankRoll - amount, wagerSize: player.wagerSize + amount });
  }

  const updateBankRoll = amount => {
    updatePlayer({...player, bankRoll: player.bankRoll + amount });
  }

  // The only update that can happen to updateInsuranceOptions is that evenmoney can be added
  const updateInsuranceOptions = option => {
    updatePlayer({...player, insuranceOptions: [...player.insuranceOptions, option]});
  }

  const updateHands = hand => {
    updatePlayer({...player, hands: [...player.hands, hand] });
  }

  const updateIsInsured = val => {
    updatePlayer({...player, isInsured: val });
  } // Even money can have a value of true and then let the hand palys out
  //OR it has a value of false and the hand pays instantly and isInHand is set to false.
  // This will eventually exist in TableData

  // hasBlackJack will come from tableData
  if( getStage() === gameStages.OFFER_INSURANCE
      && player.hands[0].hasBlackJack()
      && player.insuranceOptions.length < 3) {
    const evenMoneyOption = {
      type: 'EVEN MONEY',
      action: () => console.log('EVEN MONEY'), //this will come from TableData
    }
    updateInsuranceOptions(evenMoneyOption);
  }

  let innerElem;
  switch(getStage()) {
  case gameStages.OFFER_INSURANCE:
    innerElem = (
      <div className="changeable">
        <DisplayOptions
          options={player.insuranceOptions}
          playerHandle={player.handle}
        />
      </div>
    );
    break;
  case gameStages.PLACE_YOUR_BETS:
    innerElem = (
      <div className="changeable">
        <ManageBetsize
          changeBetSize={updateBankRollAndWagerSize}
          wagerSize={player.wagerSize}
          bankRoll={player.bankRoll}
        />
      </div>
    );
    break;
  case gameStages.HAND_PLAY: // This should not be here - it should be part of the Hand component
    innerElem = <div className="changeable">Play Youy Hand</div>
    break;
  default:
    innerElem = <div className="changeable">Change spaceing</div>
}

  return (
    <div className="player">
      <div className="hands-wrapper">HANDS</div>
      { innerElem }
      <div className="avatar-wrapper">

        <img src={require(`./../../assets/avatar-images/${player.avatarUrl}`)} />
          <span className="outer">
            <span className="inner">{player.handle}</span>
          </span>
      </div>
    </div>
  );
}

export default Player;

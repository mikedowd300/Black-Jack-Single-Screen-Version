import React from 'react';
import ManageBetsize from './../ManageBetsize/ManageBetsize';
import gameStages from './../../utilities/gameStages.enum';
import './Player.scss';

const Player = props =>  {

  // bankRoll : 100,
  // wagerSize: 2,
  // name: '',
  // avatarUrl: '',
  // hands:
  // activeHandIndex: 0,
  // insuranceOptionsData:

  const { updatePlayer } = props.actions;

  // The only update to the activeHandIndex is to increase it
  // Does this apply even when a new hand is dealt?
  const increaseActiveHandIndex = () => {
    updatePlayer({...props.player, activeHandIndex: props.player.activeHandIndex++});
  }

  //  As a player increases or decreases the bet, these two values change simultaneously
  const updateBankRollAndWagerSize = amount => {
    updatePlayer({...props.player, bankRoll: props.player.bankRoll - amount, wagerSize: props.player.wagerSize + amount });
  }

  const updateBankRoll = amount => {
    updatePlayer({...props.player, bankRoll: props.player.bankRoll + amount });
  }

  // The only update that can happen to updateInsuranceOptionData is that evenmoney can be added
  const updateInsuranceOptionData = () => {
    updatePlayer({...props.player, insuranceOptionsData: props.insuranceOptionsData.push({})});
  }

  const updateHands = hand => {
    updatePlayer({...props.player, hands: props.hands.push(hand) });
  }

  let innerElem;
  switch(props.actions.getStage()) {
  case gameStages.INSURANCE:
    innerElem = <div className="changeable">Insurance Options</div>
    break;
  case gameStages.PLACE_YOUR_BETS:
    innerElem = (
      <div className="changeable">
        <ManageBetsize
          changeBetSize={updateBankRollAndWagerSize}
          wagerSize={props.player.wagerSize}
          bankRoll={props.player.bankRoll}
        />
      </div>
    );
    break;
  case gameStages.HAND_PLAY:
    innerElem = <div className="changeable">Play Youy Hand</div>
    break;
  default:
    innerElem = <div className="changeable">Bankroll hhh Wagersize</div>
}

  return (
    <div className="player">
      <div className="hands-wrapper">HANDS</div>
      { innerElem }
      <div className="avatar-wrapper">

        <img src={require(`./../../assets/avatar-images/${props.player.avatarUrl}`)} />
          <span className="outer">
            <span className="inner">{props.player.handle}</span>
          </span>
      </div>
    </div>
  );
}

export default Player;

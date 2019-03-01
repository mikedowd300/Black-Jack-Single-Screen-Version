import React from 'react';
import './Player.scss';

const Player = props =>  {

  console.log(props);

  let innerElem = <div className="changeable">Bankroll and Wagersize</div>
  switch(props.stage) {
  case 'INSURANCE':
    innerElem = <div className="changeable">Insurance Options</div>
    break;
  case 'PLACE_YOUR_BETS':
    innerElem = <div className="changeable">increase/decrease bet</div>
    break;
  case 'HAND_PLAY':
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
        <img src={require('./../../assets/avatar-images/australia.png')} />
        <span>Handle</span>
      </div>
    </div>
  );
}

export default Player;

import React from 'react';
import './Player.scss';

const Player = props =>  {

  console.log(props);

  const innerElem = div>Bankroll and Wagersize</div>
  switch(props.stage) {
  case 'INSURANCE':
    innerElem = <div>Insurance Options</div>
    break;
  case 'PLACE_YOUR_BETS':
    innerElem = <div>increase/decrease bet</div>
    break;
  case 'HAND_PLAY':
    innerElem = <div>Play Youy Hand</div>
    break;
  default:
    innerElem = <div>Bankroll and Wagersize</div>
}

  return (
    <div className="player">
      <div className="hands-wrapper">HANDS</div>
      { innerElem }
      <div className="avatar-wrapper">
        <img src={require('./../assets/avatar-images/image-name.png')} />>
      </div>
    </div>
  );
}

export default Player;

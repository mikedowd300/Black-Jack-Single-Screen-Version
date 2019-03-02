import React from 'react';
import './EmptySeat.scss';

const EmptySeat = props =>  {

  const fillSeat = () => {
    const newPlayer = props.mvpPlayersInfo.pop();
    props.addPlayer(newPlayer);
  }

  return (
    <div className="empty-seat">
      <div className="btn" onClick={fillSeat}>
        SIT
      </div>
    </div>
  );
}

export default EmptySeat;

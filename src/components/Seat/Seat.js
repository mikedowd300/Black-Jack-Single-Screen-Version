import React from 'react';
import Player from './../Player/Player';
import './Seat.scss';

const Seat = props =>  {
  const { isActive, isTaken, isInHand, player, seatNumber, activeSeatIndex } = props.seat;
  const { updateSeats } = props.actions;

  const updateIsActive = () => {
    if((activeSeatIndex === seatNumber) !== isActive) {
      updateSeat({...props.seat, isActive: (activeSeatIndex === seatNumber)})
    }
  }

  const updateIsTaken = isTaken => {
    updateSeat({...props.seat, isTaken})
  }

  const updatePlayer = player => {
    updateSeat({...props.seat, ...player});
  }

  const updateSeat = seat => {
    updateSeats(seat)
  }

  const actions = {
    updateStage: props.updateStage,
    updateActiveSeatIndex: props.updateActiveSeatIndex,
    updatePlayer
    //add actions as it becomes obvious they are needed
  }



  const innerElem = isTaken
    ? <Player
        player={player}
        actions={actions}
      />
    : <div>OPEN SEAT</div>

  return (
    <div className={`seat ${isActive ? 'active' : ''}`} onClick={updateIsActive}>
      { innerElem }
    </div>
  );
}

export default Seat;

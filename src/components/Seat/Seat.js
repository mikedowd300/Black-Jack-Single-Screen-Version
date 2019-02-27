import React from 'react';
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
  }

  return (
    <div className={`seat ${isActive ? 'active' : ''}`} onClick={updateIsActive}>
      <div className="player-wrapper">
        hello
      </div>
    </div>
  );
}

export default Seat;

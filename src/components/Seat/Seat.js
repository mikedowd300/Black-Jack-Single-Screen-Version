import React from 'react';
import Player from './../Player/Player';
import EmptySeat from './../EmptySeat/EmptySeat';
import './Seat.scss';

const Seat = props =>  {
  const { seat, mvpPlayersInfo, conditions } = props;
  const { isActive, isInHand, player, seatNumber, activeSeatIndex } = seat;
  const { updateSeats, getStage } = props.actions;

  const updateSeat = seat => {
    updateSeats(seat)
  }

  const updateIsActive = () => {
    if((activeSeatIndex === seatNumber) !== isActive) {
      updateSeat({...seat, isActive: (activeSeatIndex === seatNumber)})
    }
  }

  const updatePlayer = player => {
    updateSeat({...seat, player});
  }

  const addPlayer = ({ handle, avatarUrl, bankRoll, wagerSize }) => {
    updatePlayer({...player, handle, avatarUrl, bankRoll, wagerSize });
  }

  const actions = {
    getStage, // Will eventually come from TableData
    updatePlayer,
    updateStage: props.updateStage, //does this exist?
    updateActiveSeatIndex: props.updateActiveSeatIndex,
    //add UPDATE actions as it becomes obvious they are needed
  }

  // This will be a method recieved from the backend
  const isTaken = () => player.handle !== null;

  const innerElem = isTaken()
    ? <Player
        player={player}
        actions={actions}
        conditions={conditions}
      />
    : <EmptySeat
        addPlayer={addPlayer}
        mvpPlayersInfo={mvpPlayersInfo}
      />

  return (
    <div className={`seat ${isActive ? 'active' : ''}`} onClick={updateIsActive}>
      { innerElem }
    </div>
  );
}

export default Seat;

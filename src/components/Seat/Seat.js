import React from 'react';
import Player from './../Player/Player';
import EmptySeat from './../EmptySeat/EmptySeat';
import './Seat.scss';

const Seat = props =>  {
  const { isActive, isInHand, player, seatNumber, activeSeatIndex } = props.seat;
  const { updateSeats, getStage } = props.actions;
  const { seat, mvpPlayersInfo } = props;

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

  const addPlayer = playerInfo => {
    updatePlayer({...player,
      handle: playerInfo.handle,
      avatarUrl: playerInfo.avatarUrl,
      bankRoll: playerInfo.bankRoll,
      wagerSize: playerInfo.wagerSize,
    });
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

import React from 'react';
import Player from './../Player/Player';
import EmptySeat from './../EmptySeat/EmptySeat';
import './Seat.scss';

const Seat = props =>  {
  const { isActive, isInHand, player, seatNumber, activeSeatIndex } = props.seat;
  const { updateSeats } = props.actions;

  const updateSeat = seat => {
    updateSeats(seat)
  }

  const updateIsActive = () => {
    if((activeSeatIndex === seatNumber) !== isActive) {
      updateSeat({...props.seat, isActive: (activeSeatIndex === seatNumber)})
    }
  }

  const updatePlayer = player => {
    updateSeat({...props.seat, player});
  }

  const addPlayer = playerInfo => {
    console.log(playerInfo);
    updatePlayer({...props.player,
      handle: playerInfo.handle,
      avatarUrl: playerInfo.avatarUrl,
      bankRoll: playerInfo.bankRoll,
      wagerSize: playerInfo.wagerSize,
    });
  }

  const actions = {
    updateStage: props.updateStage,
    updateActiveSeatIndex: props.updateActiveSeatIndex,
    updatePlayer
    //add UPDATE actions as it becomes obvious they are needed
  }

  // This will be a method recieved from the backend
  const isTaken = () => {
    return player.handle !== null;
  }

  const innerElem = isTaken()
    ? <Player
        player={player}
        actions={actions}
      />
    : <EmptySeat
        addPlayer={addPlayer}
        mvpPlayersInfo={props.mvpPlayersInfo}
      />

  return (
    <div className={`seat ${isActive ? 'active' : ''}`} onClick={updateIsActive}>
      { innerElem }
    </div>
  );
}

export default Seat;

import React from 'react';
import './ManageBetsize.scss';

const ManageBetsize = props =>  {

  const { wagerSize, bankRoll, changeBetSize } = props;

  // This should probably live in TableData
  const getSizeChange = (wagerSize, bankRoll, coeff = 1) => {

    const getCondition = limit => coeff > 0
      ? wagerSize < limit
      : wagerSize <= limit;

    // This was refactored too well, nest an if/ else - but in TableData
    const getChange = limit =>  getCondition(10)
      ? wagerSize <= 0 && coeff < 0
        ? 0
        : coeff * (Math.min(2, bankRoll))
      : coeff > 0
        ? Math.min((limit * coeff)/10, bankRoll)
        : Math.min(((limit * coeff)/10) - wagerSize%(Math.min(limit * coeff)/10), bankRoll);

    let delta = coeff > 0 ? Math.min(1000, bankRoll) : -1000;
    if(getCondition(10) ){
      delta = getChange(10);
    } else if(getCondition(50)) {
      delta = getChange(50);
    } else if(getCondition(100)) {
      delta = getChange(100);
    } else if(getCondition(200)) {
      delta = getChange(200);
    } else if(getCondition(500)) {
      delta = getChange(500);
    } else if(getCondition(1000)) {
      delta = getChange(1000);
    } else if(getCondition(5000)) {
      delta = getChange(5000);
    }

    return delta;
  }

  const onChangeBet = coeff => changeBetSize(getSizeChange(wagerSize, bankRoll, coeff));

  return (
    <div className="manage-wager-wrapper">
      <button className="btn bet-inc" onClick={() => onChangeBet(1)}>+</button>
      <span className="text wager">{wagerSize}</span>
      <span className="text bankroll">{bankRoll}</span>
      <button className="btn bet-dec" onClick={() => onChangeBet(-1)}>-</button>
    </div>
  );
}

export default ManageBetsize;

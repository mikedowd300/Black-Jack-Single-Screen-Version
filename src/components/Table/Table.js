import React, { Component } from 'react';
import gameStages from './../../utilities/gameStages.enum';
import DealerHand from './../DealerHand/DealerHand';
import Seat from './../Seat/Seat';
import TableScenario from './../../assets/mock-table-scenarios/EmptyTableScenario';
import mvpPlayersInfo from './../../assets/mvpPlayersInfo';
import conditions from './../../assets/conditions/default-conditions';
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: {
        activeSeatIndex: null,
        seats: [],
        shoe: {},
        dealerHand: {},
        stage: '',
      },
    };

    this.getStage = this.getStage.bind(this);
    this.updateActiveSeatIndex = this.updateActiveSeatIndex.bind(this);
    this.updateStage = this.updateStage.bind(this);
    this.updateDealerHand = this.updateDealerHand.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }

  componentWillMount() {
    //This is where the API call is going to happen - NOPE - ITS GONNA BE IN THE PARENT
    const newTable = TableScenario;
    const { activeSeatIndex, seats, shoe, dealerHand, stage } = newTable;
    this.updateTable({ ...this.state.table, activeSeatIndex, seats, shoe, dealerHand, stage });
  }

  // This should live in TableData
  getStage() {
    return this.state.table.stage;
  }

  updateActiveSeatIndex(activeSeatIndex) {
    this.updateTable({ ...this.state.table, activeSeatIndex })
  }

  updateStage(stage) {
    this.updateTable({ ...this.state.table, stage })
  }

  updateDealerHand(dealerHand) {
    this.updateTable({ ...this.state.table, dealerHand })
  }

  updateSeats(seat) {
    const newSeats = Object.assign([], this.state.table.seats);
    newSeats[seat.seatNumber] = seat;
    this.updateTable({ ...this.state.table, seats: newSeats })
  }

  updateTable(table) {
    this.setState({ table })
  }

  render() {

    const actions = {
      updateActiveSeatIndex: this.updateActiveSeatIndex,
      updateStage: this.updateStage,
      updateSeats: this.updateSeats,
      getStage: this.getStage,
    }

    const { seats, activeSeatIndex, dealerHand } = this.state.table;

    const seatElems = seats.map((seat, i) => <Seat
        key={`seat-${i}`}
        seat={seat}
        updateSeats={this.updateSeats}
        actions={actions}
        mvpPlayersInfo={mvpPlayersInfo}
        conditions={conditions}
      />);

    return (
      <div className="table">
        <div className="dealer-hand-wrapper">
          <DealerHand
            dealerHand={ dealerHand }
            updateDealerHand={this.updateDealerHand}
            getStage={this.getStage}
          />
        </div>
        <div className="seats-wrapper">
          { seatElems }
        </div>
      </div>
    );

  }
}

export default Table;

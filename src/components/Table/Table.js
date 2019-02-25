import React, { Component } from 'react';
import gameStages from './../../utilities/gameStages.enum';
import TableScenario from './../../assets/mock-table-scenarios/EmptyTableScenario.js';
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: {
        activeSeatIndex: null,
        seats: [],
        shoe: {},
        dealer: {},
      },
    };

    this.updateActiveSeatIndex = this.updateActiveSeatIndex.bind(this);
    this.updateStage = this.updateStage.bind(this);
    this.updateDealer = this.updateDealer.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }

  componentDidMount() {
    //This is where the API call is going to happen
    const newTable = TableScenario;
    const { activeSeatIndex, seats, shoe, dealer } = newTable;
    this.updateTable({ ...this.state.table, activeSeatIndex, seats, shoe, dealer });
  }

  updateActiveSeatIndex(seatIndex) {
    this.updateTable({ ...this.state.table, seatIndex })
  }

  updateStage(stage) {
    this.updateTable({ ...this.state.table, stage })
  }

  updateDealer(dealer) {
    this.updateTable({ ...this.state.table, dealer })
  }

  updateSeats(seat) {
    const newSeats = Object.assign([], this.state.table.seats);
    newSeats[seat.seatNumber] = seat;
    this.updateSeats({ ...this.state.table, newSeats })
  }

  updateTable(table) {
    this.setState({ table })
  }

  render() {
    console.log(this.state.table);

    const { seats, activeSeatIndex, dealer } = this.state.table;

    //When Seat is created replace the divs with the seat component
    const seatElems = seats.map((seat, i) => <div key={`seat-${i}`} className="seat-wrapper"></div>);

    return (
      <div className="table">
        <div className="dealer-wrapper"></div>
        <div className="seats-wrapper">
          {seatElems}
        </div>
      </div>
    );
  }
}

export default Table;

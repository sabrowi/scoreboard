import React, { Component } from "react";

export default class Score extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  tambahScore = () => {
    let skor = this.state.score;
    skor++;
    this.setState({ score: skor });
  };

  kurangScore = () => {
    let score = this.state.score;
    score--;
    this.setState({ score });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <button onClick={this.tambahScore} className="btn btn-sm btn-primary">
            +
          </button>
        </div>
        <div className="col-md-4">{this.state.score}</div>
        <div className="col-md-4">
          <button onClick={this.kurangScore} className="btn btn-sm btn-danger">
            -
          </button>
        </div>
      </div>
    );
  }
}

import React from "react";
import Square from "./Square";
import Winner from "./Winner";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //공백 출력
      xIsNext: true,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O"; //순서 정하기
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)} />;
  }
 
  render() { //XIsNext 값에 따라 플레이어 표시, 승자 표시
    const winner = Winner(this.state.squares);
    let status;

    if (winner) {
      status = "Winner" + winner;
    }else{
      status = "Next Player" + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
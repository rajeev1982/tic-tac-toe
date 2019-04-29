import React, { Component } from "react";
import Box from './Box';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
            player: 1,
            winner: 0,
        }
    }

    onClick = (rowIndex, colIndex) => {
        if (this.state.winner > 0) return;

        let newBoard = this.state.board;
        newBoard[rowIndex][colIndex] = this.state.player;
        let currPlayer = this.state.player;
        this.setState(prevState => ({ board: newBoard, player: this.state.player === 1 ? 2 : 1 }));

        console.debug(`${newBoard[0][0]}, ${newBoard[0][1]}, ${newBoard[0][2]}`);
        if (newBoard[0][0] > 0 && newBoard[0][0] === newBoard[0][1] && newBoard[0][1] === newBoard[0][2]) {
            alert(`Player ${currPlayer} has won`);
            this.setState(prevState => ({ winner: currPlayer }));
        }
    }

    render() {
        return (
            <div>
                {this.state.board.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex" }}>
                        {row.map((col, colIndex) => (
                            <Box key={colIndex} value={col} rowIndex={rowIndex} colIndex={colIndex} onClick={this.onClick} />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

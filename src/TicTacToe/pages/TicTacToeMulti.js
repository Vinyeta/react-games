import { useEffect, useState } from "react";
import "../../pages/pages.css";
import '../Styles/TicTacToe.css';
import TicTacToeCell from '../components/TicTacToeCells/TicTacToeCell';
import Reset from '../../components/Button/Button';
import {
    lines,
    winner
} from '../helpers/TicTacToeHelper';


export const TicTacToePage = () => {

    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);


    const [turn, setTurn] = useState('O');

    const changeTurn = () => {
        if (turn === 'O') {
            setTurn('X');
        } else {
            setTurn('O');
        }
    };

    const handleClick = (row, column) => {
        if (!board[row][column] && !winner(board, lines)) {
            let auxArray = board;
            auxArray[row][column] = turn;
            setBoard(auxArray);
            changeTurn();
        }
    }


    const reset = () => {
        let auxArray = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        setBoard(auxArray);
        if (turn === 'X') changeTurn();
        else {
            changeTurn();
            changeTurn();
        }
    }

    return (
        <div className="page-container">

            <div className="game-container">
                <div>
                    <div className='cell' onClick={() => handleClick(0, 0)}><TicTacToeCell value={board[0][0]} /></div>
                    <div className='cell' onClick={() => handleClick(0, 1)}><TicTacToeCell value={board[0][1]} /></div>
                    <div className='cell' onClick={() => handleClick(0, 2)}><TicTacToeCell value={board[0][2]} /></div>
                </div>
                <div>
                    <div className='cell' onClick={() => handleClick(1, 0)}><TicTacToeCell value={board[1][0]} /></div>
                    <div className='cell' onClick={() => handleClick(1, 1)}><TicTacToeCell value={board[1][1]} /></div>
                    <div className='cell' onClick={() => handleClick(1, 2)}><TicTacToeCell value={board[1][2]} /></div>
                </div>
                <div>
                    <div className='cell' onClick={() => handleClick(2, 0)}><TicTacToeCell value={board[2][0]} /></div>
                    <div className='cell' onClick={() => handleClick(2, 1)}><TicTacToeCell value={board[2][1]} /></div>
                    <div className='cell' onClick={() => handleClick(2, 2)}><TicTacToeCell value={board[2][2]} /></div>
                </div>
                <div>
                    {winner(board, lines) &&
                        <div className='TicTacTow_endGame'>
                            <span>The winner is: {winner(board, lines)}</span>
                            <div>
                                <Reset onClick={reset} text={'Reset'} />
                            </div>
                        </div>                        
                    }
                </div>
            </div>


        </div>
    )
}

export default TicTacToePage;
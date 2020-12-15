import { useEffect, useState } from "react";
import "../../pages/pages.css";
import '../Styles/TicTacToe.css';
import TicTacToeCell from '../components/TicTacToeCells/TicTacToeCell';
import Button from '../../components/Button/Button';
import {
    lines,
    winner
} from '../helpers/TicTacToeHelper';
import {
    easy,
    medium
} from '../helpers/AILogic';

const TicTacToeSingle = () => {

    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const [difficulty,setDifficulty] = useState();

    const changeBoard = (player, row, column) => {
        let auxArray = board;
                auxArray[row][column] = player;
                setBoard(auxArray);
    }
    const [turn, setTurn] = useState('O');

    const changeTurn = () => {
        setTurn(turn+1);
    };

    const handleClick = (row, column) => {
        if (!board[row][column] && !winner(board, lines)) {
            changeBoard('O', row, column);
            changeTurn();
            if(!winner(board, lines)) {
                if (difficulty === 'easy') {
                    easy(board,changeBoard);
                    changeTurn();
                } else if (difficulty === 'medium') {
                    medium(board,changeBoard);
                    changeTurn();
                }
            }
        }
    }




    const[boardIsRendered,setBoardIsRendered] = useState(false);


    useEffect (() => {
        const player = Math.random();
        const computer = Math.random();
        if(computer > player) {
            if (difficulty === 'easy') {
                easy(board,changeBoard);
            } else if (difficulty === 'medium') {
                medium(board,changeBoard);
            }
        } 
    },[boardIsRendered]);


    const reset = () => {
        let auxArray = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        setBoard(auxArray);
        setDifficulty(false);
        setBoardIsRendered(false);
        setTurn(0);
    }



    return (
        <div className='page-container'>
            <div className='game-container'>
                {!difficulty ?
                    <div>
                        <span>Choose difficulty</span>
                        <Button onClick={() => setDifficulty('easy')} text={'Easy'} />
                        <Button onClick={() => setDifficulty('medium')} text={'Medium(WIP)'} />
                        <Button onClick={() => setDifficulty('hard')} text={'Hard(WIP)'} />
                    </div>
                    :
                    <div className='game-container' onLoad={() => setBoardIsRendered(true)}>
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
                    </div>
                    }
                <div>
                    {winner(board,lines) &&
                        <div className='TicTacTow_endGame'>
                            <span>The winner is: {winner(board, lines)}</span>
                            <div>
                                <Button onClick={reset} text={'Reset'} />
                            </div>
                        </div>                        
                    }
                </div>
            </div>
        </div>

    )

}

export default TicTacToeSingle;
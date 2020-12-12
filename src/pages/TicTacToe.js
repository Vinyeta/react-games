import {useEffect, useState} from "react";
import "./pages.css";
import '../Styles/TicTacToe.css';
import TicTacToeCell from '../components/TicTacToeCells/TicTacToeCell';
import Reset from '../components/Reset/Reset';


export const TicTacToePage = ({resetClick}) => {

    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const [turn, setTurn] = useState ('O');
    
    const handleTurn = ( ) => {
        if (turn === 'O'){ 
           setTurn('X');
        } else {
            setTurn('O');
        }
    };

    const click = ( row, column) => {     
        if (!board[row][column]) {
            let auxArray = board;
            auxArray[row][column] = turn;
            setBoard(auxArray);
            handleTurn();
        }
    }

    const winner = (board) => {
        const lines = [
            [{row:0,column:0},{row:0,column:1},{row:0,column:2}],
            [{row:1,column:0},{row:1,column:1},{row:1,column:2}],
            [{row:2,column:0},{row:2,column:1},{row:2,column:2}],
            [{row:0,column:0},{row:1,column:0},{row:2,column:0}],
            [{row:0,column:1},{row:1,column:1},{row:2,column:1}],
            [{row:0,column:2},{row:1,column:2},{row:2,column:2}],
            [{row:0,column:0},{row:1,column:1},{row:2,column:2}],
            [{row:0,column:2},{row:1,column:1},{row:2,column:0}]
        ];
        for(let i = 0; i < lines.length; i++) {
            const [a ,b ,c] = lines[i];
            if ( board[a.row][a.column] &&
                 board[.row][a.column] === board[b.row][b.column] &&
                 board[a.row][a.column] === board[c.row][c.column]
                ) {
                  return board[a.row][a.column]; 
                } else {
                    
                }
        }
             
    };

    const [gameOver, setGameOver] = useState(false);

    
    useEffect( () => { 
        if (winner(board)) {
            setGameOver(true);
        }

    }, [turn]);
    
     const reset = () => {
         let auxArray = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        setBoard(auxArray);
        if (turn === 'X') handleTurn();
        else {
            handleTurn();
            handleTurn();
        }
     }

    return (
        <div className="page-container">
            <div className="game-container">
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => click(0,0)}><TicTacToeCell value={board[0][0]}/></div>
                   <div className='cell' onClick={() => click(0,1)}><TicTacToeCell value={board[0][1]}/></div>
                   <div className='cell' onClick={() => click(0,2)}><TicTacToeCell value={board[0][2]}/></div>
               </div>
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => click(1,0)}><TicTacToeCell value={board[1][0]}/></div>
                   <div className='cell' onClick={() => click(1,1)}><TicTacToeCell value={board[1][1]}/></div>
                   <div className='cell' onClick={() => click(1,2)}><TicTacToeCell value={board[1][2]}/></div>
               </div>
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => click(2,0)}><TicTacToeCell value={board[2][0]}/></div>
                   <div className='cell' onClick={() => click(2,1)}><TicTacToeCell value={board[2][1]}/></div>
                   <div className='cell' onClick={() => click(2,2)}><TicTacToeCell value={board[2][2]}/></div>
               </div>
            </div>
            {gameOver &&
                <div>
                    <span>The winner is: {winner(board)}</span>
                     <Reset reset={reset} /> 
                </div>
            }
        </div>
    )
}

export default TicTacToePage;
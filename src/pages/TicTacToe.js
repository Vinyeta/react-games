import {useEffect, useState} from "react";
import "./pages.css";
import '../Styles/TicTacToe.css';
import TicTacToeCell from '../components/TicTacToeCells/TicTacToeCell';
import Reset from '../components/Reset/Reset';


export const TicTacToePage = () => {

    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const [turn, setTurn] = useState ('O');
    
    const changeTurn = ( ) => {
        if (turn === 'O'){ 
           setTurn('X');
        } else {
            setTurn('O');
        }
    };

    const handleClick = ( row, column) => {     
        if (!board[row][column] && !winner(board)) {
            let auxArray = board;
            auxArray[row][column] = turn;
            setBoard(auxArray);
            changeTurn();
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
                 board[a.row][a.column] === board[b.row][b.column] &&
                 board[a.row][a.column] === board[c.row][c.column]
                ) {
                  return board[a.row][a.column]; 
             } 
        }
        let isDraw = true;
            for (let i = 0; i < board.length; i++) {
                if (board[i].find(element => element === null) === null){
                    isDraw = false;
                } 
            }
        if (isDraw) return 'Draw';
             
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
        if (turn === 'X') changeTurn();
        else {
            changeTurn();
            changeTurn();
        }
     }

    return (
        <div className="page-container">
            <div className="game-container">
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => handleClick(0,0)}><TicTacToeCell value={board[0][0]}/></div>
                   <div className='cell' onClick={() => handleClick(0,1)}><TicTacToeCell value={board[0][1]}/></div>
                   <div className='cell' onClick={() => handleClick(0,2)}><TicTacToeCell value={board[0][2]}/></div>
               </div>
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => handleClick(1,0)}><TicTacToeCell value={board[1][0]}/></div>
                   <div className='cell' onClick={() => handleClick(1,1)}><TicTacToeCell value={board[1][1]}/></div>
                   <div className='cell' onClick={() => handleClick(1,2)}><TicTacToeCell value={board[1][2]}/></div>
               </div>
               <div className='tictaetoe_row'>
                   <div className='cell' onClick={() => handleClick(2,0)}><TicTacToeCell value={board[2][0]}/></div>
                   <div className='cell' onClick={() => handleClick(2,1)}><TicTacToeCell value={board[2][1]}/></div>
                   <div className='cell' onClick={() => handleClick(2,2)}><TicTacToeCell value={board[2][2]}/></div>
               </div>
            </div>
            {gameOver &&
                <div className='TicTacTow_endGame'>
                    <span>The winner is: {winner(board)}</span>
                    <div>
                        <Reset reset={reset} /> 
                    </div>
                </div>
            }
        </div>
    )
}

export default TicTacToePage;
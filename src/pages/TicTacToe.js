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
        for (let i = 0; i < 3; i++ ){
           if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== null) {
            return board[0][i];

           } else if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== null) {

            return board[0][i];

           } 

        }
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
            
            return board[0][0];

        } else if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[2][0] !== null) {

            return board[2][0];
        } 

        let isDraw = true;
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!board[i][j]) {
                    isDraw = false;
                }
            }
        };

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
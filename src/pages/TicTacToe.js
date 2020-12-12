import { useEffect, useState } from "react";
import { Cell } from "../components/Sidebar/Cell/cell";
import "./pages.css";


export const TicTacToePage = () => {

    const initialState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const [board, setBoard] = useState(initialState);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [winner, setWinner] = useState();

    const handleSelectCell = (row, cell) => {
        if (winner === undefined || winner === '') {
            if (currentPlayer === 1) {
                let newBoard = [...board];
                newBoard[row][cell] = 'x';
                setBoard(newBoard)
                setCurrentPlayer(2)
            } if (currentPlayer === 2) {
                let newBoard = [...board];
                newBoard[row][cell] = 'o';
                setBoard(newBoard)
                setCurrentPlayer(1)
            }
        }
    }

    useEffect(() => {
        //check rows
        board.forEach(row => {
            const firstCell = row[0]
            if (row.every(x => x === firstCell && firstCell !== '')) {
                setWinner(firstCell || undefined)
            }
        })
        //check columns
        if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
            setWinner(board[0][0] || undefined)
        }
        if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
            setWinner(board[0][1] || undefined)
        }
        if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
            setWinner(board[0][2] || undefined)
        }
        //check diagonals
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            setWinner(board[0][0] || undefined)
        }
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            setWinner(board[0][2] || undefined)
        }
    }, [board])

    const handleRestart = () => {
        setBoard(initialState)
    }

    const calculateDraw = (board, winner) => {
        const fullArray = board.flatMap(x => x)
        if (fullArray.every(x => x !== '' && (winner === undefined || winner === ''))) {
            return true
        }
        return false
    }

    const calculateStatus = (winner, board, currentPlayer) => {
        return winner
            ? `Winner: ${currentPlayer}`
            : calculateDraw(board, winner)
                ? `Empate`
                : `Next player: ${currentPlayer}`
    }


    return (
        <div className="page-container">
            <div className="game-container">
                <div className="result-container">
                    {calculateStatus(winner, board, currentPlayer)}
                </div>
                <div className="box">
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className="row-tictactoe">
                            {row.map((cell, cellIndex) => (
                                <div className="cell-tictactoe" onClick={() => { 
                                    console.log(cell) 
                                    if (cell === '') { 
                                        handleSelectCell(rowIndex, cellIndex) 
                                        }}}>
                                    <Cell cell={cell} cellIndex={cellIndex} rowIndex={rowIndex} />
                                </div>
                            ))}
                        </div>
                    ))}
                    <div style={{ margin: '10px' }}><button className="restart-button" onClick={handleRestart}>Empieza de nuevo</button></div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToePage;
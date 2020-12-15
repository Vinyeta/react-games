import {
    block, 
    win, 
    edge, 
    randomCell, 
    corner, 
    center,
    triangle
} from './TicTacToeHelper';

const easy = (board,changeBoard) => {
    randomCell(board,changeBoard);
}

const medium = (board,changeBoard) => {
    if (win(board,changeBoard,true)) {
        win(board,changeBoard,false);
    } else if(block(board,changeBoard,true)){
        block(board,changeBoard,false);
    } else {
        randomCell(board,changeBoard);
    }
}

export {
    easy,
    medium
}










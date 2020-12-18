import {
    block, 
    win, 
    edge, 
    randomCell, 
    corner, 
    center,
    triangle,
    corners,
    edges,
    opositeCorner
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

const hard = (board, changeBoard, machineState, setMachineState, 
    lastPlayerMove, AiLastMove, setAiLastMove) => {

    switch (machineState) {
        case 0:
            console.log(machineState);
            corner(board, changeBoard, setAiLastMove);
            setMachineState(1);
            break;
        case 1:
            if (lastPlayerMove.row === 1 && lastPlayerMove.column === 1) {
                opositeCorner(changeBoard, AiLastMove);
            }
            break;
    
        default:
            break;
    }
}

export {
    easy,
    medium,
    hard
}










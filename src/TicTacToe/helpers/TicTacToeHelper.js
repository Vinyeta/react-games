const lines = [
    [{row:0, column:0},{row:0, column:1},{row:0, column:2}],
    [{row:1, column:0},{row:1, column:1},{row:1, column:2}],
    [{row:2, column:0},{row:2, column:1},{row:2, column:2}],
    [{row:0, column:0},{row:1, column:0},{row:2, column:0}],
    [{row:0, column:1},{row:1, column:1},{row:2, column:1}],
    [{row:0, column:2},{row:1, column:2},{row:2, column:2}],
    [{row:0, column:0},{row:1, column:1},{row:2, column:2}],
    [{row:0, column:2},{row:1, column:1},{row:2, column:0}]
];

const winner = (board, lines) => {
        
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

const block = (board,changeBoard, check) => {
    for(let i = 0; i < lines.length; i++) {
        const [a ,b ,c] = lines[i];
        if (board[a.row][a.column] === 'O' || board[b.row][b.column] === 'O') {
            if (board[a.row][a.column] === board[b.row][b.column]) {
                if (!check) changeBoard('X',c.row,c.column);
                return true;
            } else if (board[a.row][a.column] === board[c.row][c.column]) {
                if (!check)changeBoard('X',b.row,b.column);
                return true;
            } else if (board[b.row][b.column] === board[c.row][c.column]) {
                if (!check) changeBoard('X',a.row,a.column);
                return true;
            }
        }
    }
    return false;
}

const win = (board,changeBoard, check) => {
    for(let i = 0; i < lines.length; i++) {
        const [a ,b ,c] = lines[i];
        if (board[a.row][a.column] === 'X' || board[b.row][b.column] === 'X') {
            if (board[a.row][a.column] === board[b.row][b.column]) {
                if (!check) changeBoard('X',c.row,c.column);
                 return true;
            } else if (board[a.row][a.column] === board[c.row][c.column]) {
                if (!check) changeBoard('X',b.row,b.column);
               return true;
            } else if (board[b.row][b.column] === board[c.row][c.column]) {
                if (!check) changeBoard('X',a.row,a.column);
                return true;
            }
        }
    }
    return false;
}

const center = (board, changeBoard) => {
    changeBoard('X',1,1);
}

const randomCell = (board,changeBoard) => {
    let row;
    let column;
    do {
        row = Math.floor(Math.random() * 3);
        column = Math.floor(Math.random() * 3);
    } while (board[row][column]);
    changeBoard('X',row,column);
    return true;
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

const edge = (board,changeBoard) => {
    const edges = [
        {row: 0, column: 1},
        {row: 1, column: 0},
        {row: 1, column: 2},
        {row: 2, column: 1},
    ];
    shuffle(edges);
    edges.forEach( e => {
        if(!board[e.row][e.column]){
            changeBoard('X',e.row,e.column);
            return true;
        }
    })
    return false;
}

const corner = (board, changeBoard) => {
    const corners = [
        {row: 0, column: 0},
        {row: 0, column: 2},
        {row: 2, column: 0},
        {row: 2, column: 2},
    ];
    shuffle(corners);
    corners.forEach( e => {
        if(!board[e.row][e.column]){
            changeBoard('X',e.row,e.column);
            return true;
        }
    })
    return false;    
}

const triangle = (board, changeBoard) => {
    const triangles = [
        [{row:0, column:0}, {row:1, column:1}, {row:0, column:2}],
        [{row:0, column:0}, {row:1, column:1}, {row:2, column:0}],
        [{row:0, column:2}, {row:1, column:1}, {row:2, column:2}],
        [{row:2, column:2}, {row:1, column:1}, {row:2, column:0}],
        [{row:0, column:0}, {row:0, column:2}, {row:2, column:0}],
        [{row:0, column:0}, {row:0, column:2}, {row:2, column:2}],
        [{row:0, column:0}, {row:2, column:0}, {row:2, column:2}],
        [{row:0, column:2}, {row:2, column:2}, {row:2, column:0}]
    ]
    for(let i = 0; i < triangles.length; i++) {
        const [a ,b ,c] = triangles[i];
        if (board[a.row][a.column] === 'X' || board[b.row][b.column] === 'X') {
            if (board[a.row][a.column] === board[b.row][b.column]) {
                 changeBoard('X',c.row,c.column);
                 return true;
            } else if (board[a.row][a.column] === board[c.row][c.column]) {
               changeBoard('X',b.row,b.column);
               return true;
            } else if (board[b.row][b.column] === board[c.row][c.column]) {
                changeBoard('X',a.row,a.column);
                return true;
            }
        }
    }
    return false;
}

export {
    lines,
    winner,
    block,
    win,
    center,
    randomCell,
    edge,
    corner,
    triangle
};






const TicTacToeCell = ({value}) => (
    <div>
        <div>
        {value  === 'O' &&  
            <span>O</span>
            
        }
        </div>
        <div>
            {value === 'X' &&
            <span>X</span>
            }
        </div>
        <div>
            {value === null &&
            <span></span>
            }
        </div>

    </div>
);
export default TicTacToeCell;
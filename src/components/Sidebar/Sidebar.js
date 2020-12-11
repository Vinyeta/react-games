import "./Sidebar.css";
import {NavLink} from 'react-router-dom';


export const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <ul className="nav-menu">
                <li className="menu-item"><NavLink style={{textDecoration: 'none', color: 'white'}} activeClassName="menu-item-active" to="/2048">2048</NavLink></li>
                <li className="menu-item"><NavLink style={{textDecoration: 'none', color: 'white'}} to="/tictactoe">Tic Tac Toe</NavLink></li>
                <li className="menu-item"><NavLink style={{textDecoration: 'none', color: 'white'}} to="/stone">Stone</NavLink></li>
                <li className="menu-item"><NavLink style={{textDecoration: 'none', color: 'white'}} to="/tetris">Tetris</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar;
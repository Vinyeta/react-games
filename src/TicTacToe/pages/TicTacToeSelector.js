import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import "../../pages/pages.css";
import TicTacToeMulti from './TicTacToeMulti';
import TicTacToeSingle from './TicTacToeSingle'

const Selector = () => (
    <Router>
        <Switch>
            <Route exact path='/tictactoe/multi'>
                <TicTacToeMulti />
            </Route>
            <Route exact path='/tictactoe/single'>
                <TicTacToeSingle />
            </Route>
            <Route  path='/tictactoe'>
                <div className='page-container'>
                    <ul>
                        <li><NavLink to="/tictactoe/single">Single Player</NavLink></li>
                        <li><NavLink to="/tictactoe/multi">Multi Player</NavLink></li>
                    </ul>
                </div>
            </Route>
        </Switch>
    </Router>
);

export default Selector;
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import TetrisPage from "./pages/TetrisPage";
import TicTacToePage from "./TicTacToe/pages/TicTacToeSelector";
import StonePage from "./pages/StonePage";
import NumbersPage from "./pages/NumbersPage";

function App() {
  return (
      <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/tictactoe" component={TicTacToePage} />
            <Route path="/stone" component={StonePage} />
            <Route path="/2048" component={NumbersPage} />
            <Route path="/tetris" component={TetrisPage} />
            <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
  );
}

export default App;

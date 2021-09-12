import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from './contexts/UserContext';
import ProgressContext from "./contexts/ProgressContext";
import Login from './pages/Login/Login';
import Register from './pages/Register/Resgister';
import Habits from './pages/Habits/Habits';
import Today from './pages/Today/Today';
import History from './pages/History/History';

export default function App() {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Login setUser={setUser} />
            </Route>
            <Route exact path='/cadastro'>
              <Register />
            </Route>
            <Route exact path='/habitos'>
              <Habits />
            </Route>
            <Route exact path='/hoje'>
              <Today />
            </Route>
            <Route exact path='/historico'>
              <History />
            </Route>
          </Switch>
        </BrowserRouter>
      </ProgressContext.Provider>
    </UserContext.Provider>

  );
}
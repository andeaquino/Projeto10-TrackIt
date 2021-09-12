import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Resgister';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import History from './History/History';
import UserContext from '../contexts/UserContext';
import ProgressContext from "../contexts/ProgressContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProgressContext.Provider value={{progress, setProgress}}>
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
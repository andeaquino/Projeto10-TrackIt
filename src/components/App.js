import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Resgister';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import History from './History/History';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login />
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
  );
}
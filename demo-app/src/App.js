import logo from './logo.svg';
import './App.css';
import { CommentPage } from './Pages/CommentPage'
import { Show } from './Pages/Show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/'>
          <CommentPage/>
        </Route>
        <Route path='/:id'>
          <Show/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

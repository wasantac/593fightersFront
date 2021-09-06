import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inscripcion from './Views/Inscripcion';
import Home from './Views/Home';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/torneo" component={Inscripcion} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

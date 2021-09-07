import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inscripcion from './Views/Inscripcion';
import Home from './Views/Home';
import Torneo from './Views/Torneo';
import VerTorneos from './Views/VerTorneos';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/inscripcion/:id" component={Inscripcion} ></Route>
          <Route exact path="/torneo/:id" component={Torneo}></Route>
          <Route exact path="/torneos" component={VerTorneos}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

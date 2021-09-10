import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Inscripcion from './Views/Inscripcion';
import Home from './Views/Home';
import Torneo from './Views/Torneo';
import VerTorneos from './Views/VerTorneos';
import Nosotros from './Views/Nosotros';
import TablaRanked from './Views/TablaRanked';
import Login from './Views/Login';
import axios from 'axios';
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import Registro from './Views/Registro';
import Perfil from './Views/Perfil';
let {REACT_APP_URL} = process.env;
axios.defaults.baseURL =REACT_APP_URL;
function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/inscripcion/:id" component={Inscripcion} ></Route>
          <Route exact path="/torneo/:id" component={Torneo}></Route>
          <Route exact path="/torneos" component={VerTorneos}></Route>
          <Route exact path="/nosotros" component={Nosotros}></Route>
          <Route exact path="/tabla-ranked" component={TablaRanked}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/registro" component={Registro}></Route>
          <Route exact path="/perfil" component={Perfil}></Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

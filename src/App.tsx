import './App.css';
import Login from './user/login/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Library from './library/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/library" component={Library}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

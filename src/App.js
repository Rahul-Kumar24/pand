import React from 'react';
import PageFirst from './Component/Home/Home'
import Home from './Component/Imp/Homi'
import Des from './Component/Imp/Des'
import Wallet from './Component/Imp/Wallet'
import About from './Component/Imp/About'
import Form from './Component/page22/PageFirst'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={PageFirst} exact='true'/>
          <Route path='/home' component={Home}/>
          <Route path='/das' component={Des}/>
          <Route path='/abo' component={About}/>
          <Route path='/stre' component={Form}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

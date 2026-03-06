import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SimpleUIPage from './pages/SimpleUIPage/SimpleUIPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/simple">Simple UI Page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/simple" component={SimpleUIPage} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;

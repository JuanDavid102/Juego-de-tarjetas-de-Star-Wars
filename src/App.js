import './App.css';
import {Route} from 'wouter';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App container-fluid bg-stars">
      <Route 
          component={Home}
          path="/">
      </Route>
    </div>
  );
}

export default App;

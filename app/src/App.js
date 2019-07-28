import React from 'react';
import { Route } from 'react-router-dom';
import feature1 from './components/feature1.jsx';
import feature2 from './components/feature2.jsx';
import feature3 from './components/feature3.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/feature1" component={feature1} />
        <Route exact path="/feature2" component={feature2} />
        <Route exact path="/feature3" component={feature3} />
      </header>
    </div>
  );
}

export default App;

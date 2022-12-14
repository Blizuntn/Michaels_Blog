import React from 'react';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom'
import PageRenderer from './page-renderer';

function App() {
  const user = {
    firstName: "Michael",
    lastName: "Bunton"
  }
  return (
    <Router>
    <div className="App">
      <Navigation user={user}/>
      <Routes>
        <Route path="/:page" component={PageRenderer}/>
        <Route path="/" render={() => <redirect to="/home" />} />
        <Route component={() => 404}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

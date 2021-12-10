import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home'


import DragAndDrop from './components/pages/drag-and-drop/Home'
import CountdowmTimer from './components/pages/countdown-timer/Home'

const App = () => {
  return (
    <Router>

      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/drag-and-drop" component={DragAndDrop} />
        <Route exact path="/countdown-timer" component={CountdowmTimer} />

      </Switch>

    </Router>
  )
}

export default App

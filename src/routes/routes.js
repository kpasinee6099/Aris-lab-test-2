import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from '../screen/main'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

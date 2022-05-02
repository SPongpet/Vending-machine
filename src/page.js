import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, IndexContainer } from './container'

export const LIST_PAGE = {
  INDEX: {
    LINK   : '/',
    PAGE   : IndexContainer,
    PAGE_ID: 'index',
  },
}

export const listRoute = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          key={LIST_PAGE.INDEX.LINK}
          path={LIST_PAGE.INDEX.LINK}
          component={props => (
            <Layout {...props} page={LIST_PAGE.INDEX.PAGE} pageId={LIST_PAGE.INDEX.PAGE_ID} />
          )}
        />
      </Switch>
    </Router>
  )
}
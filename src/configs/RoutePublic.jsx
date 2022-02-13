import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RoutePublic = ({ component: Component, restricted, ...rest }, props) => {
  const isAuthenticated = localStorage.getItem('token')
  return (
    <Route {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to={{
            pathname: '/main/product',
            state: { from: props.location }
          }} />
        ) : (
          <Component {...props} />
        )}
    />
  )
}

export default RoutePublic

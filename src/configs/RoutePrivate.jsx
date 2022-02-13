import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RoutePrivate = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token')
  // const isAuthenticated = false
  return (
    <Route {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/auth/sign-in',
            state: { from: props.location }
          }
          } />
        )
      }
    />
  )
}

export default RoutePrivate

import PropTypes from 'prop-types'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ element, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburguer:userData')

  if (!user) {
    return <Navigate to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }
  return (
    <>
      {!isAdmin && <Header />}
      <Outlet {...rest} />
    </>
  )
}

export default PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}

import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Login, Products, Register, Home, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route element={<Admin />} path={paths.Order} />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route element={<Admin />} path={paths.Products} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes

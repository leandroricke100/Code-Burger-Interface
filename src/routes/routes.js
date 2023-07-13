import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Login, Products, Register, Home, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route element={<Admin />} path="/pedidos" />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes

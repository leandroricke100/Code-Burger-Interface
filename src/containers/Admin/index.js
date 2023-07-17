import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()
  console.log(locationPathname)
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {locationPathname === paths.Order && <Orders />}
        {locationPathname === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import NewProduct from './NewProdutc'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()

  return (
    <Container>
      <SideMenuAdmin path={locationPathname} />
      <ContainerItems>
        {locationPathname === paths.Order && <Orders />}
        {locationPathname === paths.Products && <ListProducts />}
        {locationPathname === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  )
}

import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import ListLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {ListLinks.map(item => (
        <ItemContainer key={item.id} $isactive={true}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

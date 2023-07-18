import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

export function Button({ children, ...rest }) {
  // console.log(rest)
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string
}

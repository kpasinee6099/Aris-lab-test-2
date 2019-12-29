import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ButtonStyles = withStyles({
  root: {
    backgroundColor: '#e81690',
    '& .MuiButton-label': {
      color: 'white',
    },
  },
})(Button)

function ButtonCustom(props) {
  const { children, ...rest } = props
  return <ButtonStyles {...rest}>{children}</ButtonStyles>
}

export default ButtonCustom

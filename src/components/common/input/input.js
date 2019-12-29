import React from 'react'

import { TextField, InputLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const TextFieldStyles = withStyles({
  root: {
    height: 30,
    fontSize: 13,
    width: props => props.width || '100%',
    borderRadius: 5,
    border: 0,
  },
})(TextField)

function Input(props) {
  const { label, placeHolder, ...rest } = props
  return (
    <div style={{ margin: '25px 0' }}>
      <InputLabel style={{ color: '#6f6f6f', fontSize: 13 }}>{label}</InputLabel>
      <TextFieldStyles variant="outlined" margin="dense" placeholder={placeHolder} {...rest} />
    </div>
  )
}

export default Input

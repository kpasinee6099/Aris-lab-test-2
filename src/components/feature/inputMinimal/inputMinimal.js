import React, { useRef, useState } from 'react'
import { TextField } from '@material-ui/core'

function InputMinimal(props) {
  const { saveValue } = props
  const elRef = useRef([...Array(6)].map(() => React.createRef()))

  const [input, setInput] = useState(Array(6))

  const onChangeHandler = (index, e) => {
    const inputToChange = [...input]
    inputToChange[index] = e.target.value
    setInput(inputToChange)
    if (index !== 5) {
      elRef.current[index + 1].current.focus()
    } else {
      if (input.length === 6) {
        saveValue(inputToChange.join(''))
      }
    }
  }

  const renderInput = () => {
    let renderInput = []
    for (let i = 0; i < 6; i++) {
      renderInput.push(
        <TextField
          key={i}
          inputRef={elRef.current[i]}
          inputProps={{ maxLength: 1 }}
          variant="outlined"
          margin="dense"
          style={{ width: 45, margin: 5 }}
          onChange={e => onChangeHandler(i, e)}
          placeholder="0"
        />
      )
    }
    return renderInput
  }

  return <div>{renderInput()}</div>
}

export default InputMinimal

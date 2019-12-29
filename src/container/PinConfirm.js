import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Button } from '../components/common'
import { InputMinimal } from '../components/feature'

const containerStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    flexGrow: '1',
  },
  buttonContainer: {
    width: '100%',
    textAlign: 'right',
    marginTop: 40,
  },
})

function PinConfirm(props) {
  const { description, firstPin, onClickSuccess } = props
  const containerClass = containerStyles()
  const [disableBtn, setDisableBtn] = useState(true)
  const [PIN, setPIN] = useState()

  const doSavePin = value => {
    if (value.length === 6 && value === firstPin) {
      setPIN(value)
      setDisableBtn(false)
    }
  }

  return (
    <>
      <div style={{ margin: 20, textAlign: 'center' }}>
        <h1>ตั้ง PIN</h1>
        <span>{description}</span>
      </div>
      <div>
        <InputMinimal saveValue={doSavePin} />
      </div>
      <div className={containerClass.buttonContainer}>
        <Button disabled={disableBtn} onClick={() => onClickSuccess(PIN)}>
          ต่อไป
        </Button>
      </div>
    </>
  )
}

export default PinConfirm

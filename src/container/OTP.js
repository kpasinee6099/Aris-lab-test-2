import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Button } from '../components/common'
import { InputMinimal } from '../components/feature'

const OTPCheck = '102938'

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
    marginTop: 50,
  },
})

function OTP(props) {
  const { phoneNumber = '1234', onClickOtp } = props
  const containerClass = containerStyles()
  const [disableBtn, setDisableBtn] = useState(true)

  const doSaveOtp = otp => {
    if (otp === OTPCheck) setDisableBtn(false)
  }
  return (
    <>
      <div style={{ margin: 20 }}>
        <h1>ยืนยัน OTP</h1>
        <span>ของหมายเลข {phoneNumber}</span>
      </div>
      <div>
        <span>กรุณาระบุ OTP</span>
        <InputMinimal saveValue={doSaveOtp} />
      </div>
      <div className={containerClass.buttonContainer}>
        <Button disabled={disableBtn} onClick={onClickOtp}>
          ต่อไป
        </Button>
      </div>
    </>
  )
}

export default OTP

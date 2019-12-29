import React, { useState } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import { Register, OTP, Pin, PinConfirm, Info } from '../container'

const CardStyles = withStyles({
  root: {
    width: 400,
    height: 400,
  },
})(Card)

const CardContentStyles = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})(CardContent)

const containerStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    flexGrow: '1',
  },
})

function Main() {
  const [page, setPage] = useState('register')
  const [userInfo, setUserInfo] = useState({ phone: '' })
  const [firstPin, setFirstPin] = useState()
  const containerClass = containerStyles()

  const doSubmitRegister = e => {
    setUserInfo(e)
    setPage('OTP')
  }

  const doClickOtp = () => {
    setPage('Pin')
  }

  const doClickSaveFirstPin = value => {
    setFirstPin(value)
    setPage('PinConfirm')
  }

  const doClickSuccess = value => {
    setUserInfo({ ...userInfo, PIN: value })
    setPage('Info')
  }

  const renderPageFromState = () => {
    switch (page) {
      case 'register':
        return <Register onSubmit={doSubmitRegister} />
      case 'OTP':
        return <OTP phoneNumber={userInfo.phone} onClickOtp={doClickOtp} />
      case 'Pin':
        return (
          <Pin
            description="เพื่อใช้ในการยืนยันตัวตนในครั้งต่อไป"
            onClickSavePin={doClickSaveFirstPin}
          />
        )
      case 'PinConfirm':
        return (
          <PinConfirm
            description="ระบุอีกครั้ง"
            firstPin={firstPin}
            onClickSuccess={doClickSuccess}
          />
        )
      default:
        return <Info info={userInfo} />
    }
  }

  return (
    <div className={containerClass.root}>
      <CardStyles>
        <CardContentStyles>{renderPageFromState()}</CardContentStyles>
      </CardStyles>
    </div>
  )
}

export default Main

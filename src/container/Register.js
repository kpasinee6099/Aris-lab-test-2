import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { isEmpty } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'

import { Input, Button } from '../components/common'

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
    marginTop: 40,
    width: '100%',
    textAlign: 'right',
  },
})

function Register(props) {
  const { onSubmit } = props
  const { register, handleSubmit, errors } = useForm()

  const containerClass = containerStyles()

  console.log(errors)
  return (
    <Fragment>
      <div style={{ margin: 10 }}>
        <h1>ยืนยันตัวตน</h1>
        <span>เพื่อความถูกต้องของข้อมูล</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isEmpty(errors.phone) && errors.phone.message}
        <Input
          name="name"
          label="ชื่อ - นามสกุล *"
          placeHolder="ชื่อ - นามสกุล"
          inputRef={register({
            required: 'This field is empty',
          })}
          required
        />
        <Input
          name="phone"
          label="เบอร์โทรศัพท์ *"
          placeHolder="เบอร์โทรศัพท์"
          inputRef={register({
            required: 'This field is empty',
            pattern: {
              value: /[0][0-9]{9}/,
              message: 'invalid phone number',
            },
          })}
          required
        />

        <div className={containerClass.buttonContainer}>
          <Button type="submit">ต่อไป</Button>
        </div>
      </form>
    </Fragment>
  )
}

export default Register

import React from 'react'

function Info(props) {
  const {
    info: { name, phone, PIN },
  } = props
  return (
    <div>
      <h1>ข้อมูลสมาชิก</h1>
      <p>ชื่อ นามสกุล: {name}</p>
      <p>หมายเลขโทรศัพท์: {phone}</p>
      <p>PIN: {PIN}</p>
    </div>
  )
}

export default Info

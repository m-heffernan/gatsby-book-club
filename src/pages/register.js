import React, { useState } from "react"
import { Button, Input, Form } from "../components/common"

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  function handleInputChange(e) {
    e.persist()
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        value={formValues.email}
        placeholder="email"
        type="email"
        required
        name="email"
      />
      <Input
        onChange={handleInputChange}
        value={formValues.password}
        placeholder="password"
        type="password"
        required
        minLength={3}
        name="password"
      />
      <Input
        onChange={handleInputChange}
        value={formValues.confirmPassword}
        placeholder="confirm password"
        type="password"
        required
        minLength={3}
        name="confirmPassword"
      />
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  )
}

export default Register

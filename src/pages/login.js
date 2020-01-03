import React, { useState } from "react"
import { Link } from "gatsby"
import { useAuth } from "../components/Firebase"
import Layout from "../components/layout"

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    firebase.login({ email: formValues.email, password: formValues.password })
  }

  function handleInputChange(e) {
    e.persist()
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={formValues.email}
          name="email"
          onChange={handleInputChange}
          placeholder="email"
          type="email"
        />
        <input
          value={formValues.password}
          name="password"
          onChange={handleInputChange}
          placeholder="password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login

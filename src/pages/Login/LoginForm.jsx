import React, { useEffect, useState } from "react"
import { Button, Form, Heading, Icon } from "react-bulma-components"
import { FaLock, FaUserAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { links, stateStatus } from "../../config"
import { login } from "../../features/auth/authAction"

const DESCRIPTION_STYLE = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
}

const COLOR = {
  color: "hsla(0, 0%, 0%, 0.33)",
}

let usrnameRef, pwRef

const LoginForm = () => {
  const [isValid, setIsValid] = useState(true)
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const history = useHistory()

  useEffect(() => {
    if (auth.status === stateStatus.successed) {
      history.push("/dashboard")
    }
  }, [auth.status, history])

  const handleSubmit = async e => {
    e.preventDefault()
    const re = /^\w{4,15}$/

    try {
      if (!re.test(usrnameRef.value) || !re.test(pwRef.value)) {
        setIsValid(false)
        return
      }

      dispatch(
        login({ credential: { username: usrnameRef.value, pw: pwRef.value } })
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Heading size="5">Login with your Account</Heading>{" "}
      <p style={DESCRIPTION_STYLE}>
        🤖{" "}
        <span style={COLOR}>
          Login to create match in order to practice your Procon Model.
        </span>
      </p>
      <form onSubmit={handleSubmit} className="has-text-left">
        <Form.Field>
          <Form.Control>
            <Form.Input
              domRef={node => (usrnameRef = node)}
              size="medium"
              type="text"
              placeholder="Username"
            />
            <Icon align="left" size="small">
              <FaUserAlt />
            </Icon>
          </Form.Control>
          {!isValid && (
            <Form.Help color="danger">
              Username must between 4 and 15 alphanumeric or underscore
              character.
            </Form.Help>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Input
              domRef={node => (pwRef = node)}
              size="medium"
              type="password"
              placeholder="Password"
            />
            <Icon align="left" size="small">
              <FaLock />
            </Icon>
          </Form.Control>
          {!isValid && (
            <Form.Help color="danger">
              Password must between 4 and 15 alphanumeric or underscore
              character.
            </Form.Help>
          )}
        </Form.Field>
        <Button size="medium" fullwidth="true" color="primary">
          Login
        </Button>
      </form>
      <br />
      <small style={COLOR}>
        <em>
          Contact with{" "}
          <a href={links.facebook} target="_blank" rel="noreferrer">
            admin
          </a>{" "}
          to create account.
        </em>
      </small>
    </>
  )
}

export default LoginForm

import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const [inputVals, setInputVals] = useState({
    email: '',
    password: ''
  })
  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false
  })

  const isEmailInvalid =
    isEdited.email &&
    !isEmail(inputVals.email) ||
    !isNotEmpty(inputVals.email)
  const isPasswordInvalid =
    isEdited.password &&
    !hasMinLength(inputVals.password, 6)

  function onChangeInput(identify, value) {
    setInputVals(prev => ({
      ...prev,
      [identify]: value
    }))
  }

  function onBlur(identify) {
    setIsEdited(prev => ({
      ...prev,
      [identify]: true
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputVals)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label='Email' id='email' name='email'
          error={isEmailInvalid && 'Please enter a valid email'}
          value={inputVals.email}
          onChange={e => { onChangeInput('email', e.target.value) }}
          onBlur={e => { onBlur('email') }} />

        <Input label='Password' id='password' type="password" name="password"
          error={isPasswordInvalid && 'Password must be greater than 6 characters'}
          value={inputVals.password}
          onChange={e => { onChangeInput('password', e.target.value) }}
          onBlur={e => { onBlur('password') }} />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

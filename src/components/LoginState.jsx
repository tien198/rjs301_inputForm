import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // const [inputVals, setInputVals] = useState({
  //   email: '',
  //   password: ''
  // })
  // const [isEdited, setIsEdited] = useState({
  //   email: false,
  //   password: false
  // })

  // const isEmailInvalid =
  //   isEdited.email &&
  //   !isEmail(inputVals.email) ||
  //   !isNotEmpty(inputVals.email)
  // const isPasswordInvalid =
  //   isEdited.password &&
  //   !hasMinLength(inputVals.password, 6)

  // function onChangeInput(identify, value) {
  //   setInputVals(prev => ({
  //     ...prev,
  //     [identify]: value
  //   }))
  // }

  // function onBlur(identify) {
  //   setIsEdited(prev => ({
  //     ...prev,
  //     [identify]: true
  //   }))
  // }

  const {
    value: emailVal,
    onChangeInput: onEmailChange,
    onBlur: onEmailBlur,
    hasError: hasEmailError
  } = useInput('', val => isEmail(val) && isNotEmpty(val))

  const {
    value: passwordVal,
    onChangeInput: onPasswordChange,
    onBlur: onPasswordBlur,
    hasError: hasPasswordError
  } = useInput('', val => hasMinLength(val, 6))

  function handleSubmit(e) {
    e.preventDefault()
    if (hasEmailError || hasPasswordError)
      return
    console.log(emailVal)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label='Email' id='email' name='email'
          error={hasEmailError && 'Please enter a valid email'}
          value={emailVal}
          onChange={onEmailChange}
          onBlur={onEmailBlur} />

        <Input label='Password' id='password' type="password" name="password"
          error={hasPasswordError && 'Password must be greater than 6 characters'}
          value={passwordVal}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur} />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

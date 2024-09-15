import { useState } from "react";

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
    !inputVals.email.includes('@')

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input value={inputVals.email} onChange={e => { onChangeInput('email', e.target.value) }}
            onBlur={e => { onBlur('email') }} id="email" type="email" name="email" />
          <div className='control-error'>{isEmailInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input value={inputVals.password} onChange={e => { onChangeInput('password', e.target.value) }}
            onBlur={e => { onBlur('password') }} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

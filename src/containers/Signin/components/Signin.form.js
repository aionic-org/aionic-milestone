import React from 'react'

import './Signin.form.css'

export const SigninForm = props => (
  <div className="SigninForm">
    <form action="" className="sigin-form" onSubmit={props.handleSubmit}>
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email address"
        onChange={props.handleInputChange}
        required
      />

      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        onChange={props.handleInputChange}
        required
      />
      <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
        <i className="fas fa-sign-in-alt" /> Sign in
      </button>
    </form>
  </div>
)

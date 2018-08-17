import React from 'react'

import './Register.form.css'

export function RegisterForm(props) {
  return (
    <div className="RegisterForm">
      <form action="" className="sigin-form" onSubmit={props.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          onChange={props.handleInputChange}
          required
        />

        <input
          type="text"
          name="firstname"
          className="form-control"
          placeholder="Firstname"
          onChange={props.handleInputChange}
          required
        />

        <input
          type="text"
          name="lastname"
          className="form-control"
          placeholder="Lastname"
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
          <i className="fas fa-sign-in-alt" />
          &nbsp;Sign in
        </button>
      </form>
    </div>
  )
}

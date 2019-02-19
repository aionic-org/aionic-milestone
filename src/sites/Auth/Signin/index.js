import React from 'react'

import './Signin.css'

import UILogo from 'components/UI/Logo'

import SigninForm from './components/Form/'

const SitesSignin = props => {
  const logoStyle = {
    height: '72px',
    width: '72px',
    marginBottom: '20px'
  }

  return (
    <div className="SitesSignin">
      <UILogo assignedStyle={logoStyle} />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <SigninForm />
      <a href="https://aionic.app" target="_blank" className="mt-4 text-muted d-block">
        Aionic Apps
      </a>
    </div>
  )
}

export default SitesSignin

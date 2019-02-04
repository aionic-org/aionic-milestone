import React from 'react'

const Title = props => (
  <div className="Title mb-4">
    <h1 className="h2">{props.title}</h1>
    {props.showDivider ? <hr className="featurette-divider" /> : null}
  </div>
)

Title.defaultProps = {
  showDivider: true
}

export default Title

import React from 'react'

const Title = props => (
  <div className="Title mb-4">
    <h1 className="h3 mb-4">{props.title}</h1>
    {props.showDivider ? <hr className="featurette-divider" /> : null}
  </div>
)

Title.defaultProps = {
  showDivider: false
}

export default Title

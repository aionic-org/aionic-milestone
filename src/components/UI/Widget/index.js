import React from 'react'

import './Widget.css'

const Widget = props => {
  const { title, subtitle, icon, iconColor, subcontent } = props

  return (
    <div className="Widget">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className={subcontent ? 'col-auto' : 'col'}>
              <h6 className="mb-1 text-muted text-uppercase">{subtitle}</h6>
              <h4 className="card-title mb-0">{title}</h4>
            </div>
            {subcontent}
            <div className="col-auto">
              <i className={`${icon} fa-lg mt-3`} style={{ color: iconColor }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Widget.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
  iconColor: '#636e72',
  subcontent: null
}

export default Widget

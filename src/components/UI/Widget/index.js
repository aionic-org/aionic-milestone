import React from 'react'

import './Widget.css'

const Widget = props => {
  const { title, subtitle, icon, subcontent } = props

  return (
    <div className="Widget">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className={subcontent ? 'col-auto' : 'col'}>
              <h6 class="mb-1 text-muted text-uppercase">{subtitle}</h6>
              <h4 class="card-title mb-0">{title}</h4>
            </div>
            {subcontent ? subcontent : null}
            <div className="col-auto">
              <i class={`${icon} fa-lg mt-3`} />
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
  icon: ''
}

export default Widget

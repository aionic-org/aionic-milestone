import React, { useState } from 'react'

const Navs = props => {
  const { tabs, handleClick } = props
  const [activeTab, setActiveTab] = useState(null)

  const handleTabChange = e => {
    const pos = Number(e.target.dataset.pos)

    if (pos === activeTab) {
      setActiveTab(null)
      props.handleClick(null)
    } else {
      setActiveTab(pos)
      handleClick(tabs[pos].name, tabs[pos].id)
    }
  }

  return (
    <div className="Navs">
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li className="nav-item" key={i}>
            <a
              className={`nav-link ${i === activeTab ? 'active' : ''}`}
              onClick={e => {
                e.preventDefault()
                handleTabChange(e)
              }}
              key={i}
              data-pos={i}
              data-id={tab.id}
              disabled={tab.disabled === undefined ? false : tab.disabled}
              href="#"
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Navs.defaultProps = {
  tabs: []
}

export default Navs

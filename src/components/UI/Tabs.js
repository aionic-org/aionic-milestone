import React, { Component } from 'react'

class Tabs extends Component {
  constructor(props) {
    super(props)

    this.state = { tabs: this.props.tabs, activeTab: null }
  }

  handleClick = tabPos => {
    if (tabPos === this.state.activeTab) {
      this.setState({ activeTab: null }, () => {
        this.props.handleClick(null)
      })
    } else {
      this.setState({ activeTab: tabPos }, () => {
        this.props.handleClick(this.state.tabs[tabPos])
      })
    }
  }

  render() {
    const { activeTab } = this.state

    return (
      <div className="Tabs">
        <nav className="nav nav-pills">
          {this.state.tabs.map((tab, i) => (
            <a
              className={'nav-item nav-link ' + (i === activeTab ? 'active' : '')}
              onClick={e => {
                e.preventDefault()
                this.handleClick(i)
              }}
              href="#"
              key={i}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>
    )
  }
}

Tabs.defaultProps = {
  tabs: [],
  handleClick: () => {}
}

export default Tabs

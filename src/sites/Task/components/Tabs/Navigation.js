import React, { Component } from 'react'

class SitesTaskTabNav extends Component {
  constructor(props) {
    super(props)

    this.state = { tabs: ['Comments', 'Commits', 'Links'], activeTab: null }
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
    return (
      <div className="ContainersTaskMainTabsNav">
        <nav className="nav nav-pills">
          {this.state.tabs.map((tab, i) => (
            <a
              className={'nav-item nav-link ' + (i === this.state.activeTab ? 'active' : '')}
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

export default SitesTaskTabNav

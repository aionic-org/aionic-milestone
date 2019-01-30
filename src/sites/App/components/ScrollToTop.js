import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const isTab =
      this.props.location.state !== undefined && this.props.location.state.isTab === true

    if (this.props.location !== prevProps.location && !isTab) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)

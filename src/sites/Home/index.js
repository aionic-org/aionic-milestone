import React from 'react'

import './Home.css'

import Content from 'components/UI/Content'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'

const SitesHome = props => {
  return (
    <div className="SitesHome">
      <Content>
        <BoardTaskContainerUser />
      </Content>
    </div>
  )
}

export default SitesHome

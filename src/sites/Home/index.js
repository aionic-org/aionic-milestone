import React from 'react'

import './Home.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import UserDashboardTaskContainer from 'components/User/Dashboard/TaskContainer'

const SitesHome = props => {
  return (
    <div className="SitesHome">
      <Content>
        <Title title={`Welcome back, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-12">
            <UserDashboardTaskContainer user={Session.getUser()} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesHome

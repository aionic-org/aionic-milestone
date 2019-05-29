import React from 'react'

import './Home.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import UserDashboardTaskContainer from 'components/User/Dashboard/TaskContainer'
import Widget from 'components/Widget'

import UserStatus from 'components/User/Status'
import AnnouncementContainer from 'components/Announcements/container'

const SitesHome = props => {
  return (
    <div className="SitesHome">
      <Content>
        <Title title={`Welcome, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-xl-9 col-12">
            <Widget title="Dashboard" icon="fas fa-tasks fa-fw">
              <UserDashboardTaskContainer user={Session.getUser()} />
            </Widget>
          </div>
          <div className="col-xl-3 col-12 mt-3 mt-xl-0">
            <Widget title="How you're doing?" icon="fas fa-edit" showLastUpdate={false}>
              <UserStatus user={Session.getUser()} />
            </Widget>

            <Widget title="Announcements" icon="fas fa-bullhorn" showMargin={true} wrapBody={false}>
              <AnnouncementContainer />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesHome

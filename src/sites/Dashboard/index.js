import React from 'react'

import './Dashboard.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import UserBoardTaskContainer from 'components/User/Board/TaskContainer'
import Widget from 'components/Widget'

import UserStatus from 'components/User/Status'
import AnnouncementContainer from 'components/Announcements/container'

const SitesDashboard = props => {
  return (
    <div className="SitesDashboard">
      <Content>
        <Title title={`Welcome, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-xl-9 col-12">
            <Widget title="Tasks" icon="fas fa-clipboard-list">
              <UserBoardTaskContainer user={Session.getUser()} />
            </Widget>
          </div>
          <div className="col-xl-3 col-12 mt-3 mt-xl-0">
            <Widget title="Your status" icon="fas fa-edit" showLastUpdate={false}>
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

export default SitesDashboard

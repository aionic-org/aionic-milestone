import React from 'react'

import './Dashboard.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'
import Widget from 'components/Widget'

import UserStatus from 'components/User/Status'
import AnnouncementList from 'components/Announcements/List'

const SitesDashboard = props => {
  return (
    <div className="SitesDashboard">
      <Content>
        <Title title={`Welcome, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-xl-9 col-12">
            <Widget title="Task board" icon="fas fa-clipboard-list">
              <BoardTaskContainerUser user={Session.getUser()} />
            </Widget>
          </div>
          <div className="col-xl-3 col-12 mt-3 mt-xl-0">
            <Widget title="Your status" icon="fas fa-edit" showLastUpdate={false}>
              <UserStatus user={Session.getUser()} />
            </Widget>

            <Widget title="Announcements" icon="fas fa-bullhorn" showMargin={true} wrapBody={false}>
              <AnnouncementList announcementList={[1, 2, 3]} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesDashboard

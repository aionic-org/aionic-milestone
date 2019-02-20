import React from 'react'

import './Dashboard.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'
import Card from 'components/Card'

import UserStatus from 'components/User/Status'
import AnnouncementList from 'components/Announcements/List'

const SitesDashboard = props => {
  return (
    <div className="SitesDashboard">
      <Content>
        <Title title={`Welcome, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-xl-9 col-12">
            <Card title="Your task board" icon="fas fa-clipboard-list">
              <BoardTaskContainerUser user={Session.getUser()} />
            </Card>
          </div>
          <div className="col-xl-3 col-12 mt-3 mt-xl-0">
            <Card title="Your status" icon="fas fa-edit" showLastUpdate={false}>
              <UserStatus user={Session.getUser()} />
            </Card>

            <Card title="Announcements" icon="fas fa-bullhorn" showMargin={true} wrapBody={false}>
              <AnnouncementList announcementList={[1, 2, 3]} />
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesDashboard

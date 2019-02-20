import React from 'react'

import './Dashboard.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'
import Card from 'components/Card'
import UserStatus from '../../components/User/Status'

const SitesDashboard = props => {
  return (
    <div className="SitesDashboard">
      <Content>
        <Title title={`Welcome, ${Session.getUser().firstname}!`} />
        <div className="row">
          <div className="col-md-9 col-12">
            <Card title="Your task board" icon="fas fa-clipboard-list">
              <BoardTaskContainerUser user={Session.getUser()} />
            </Card>
          </div>
          <div className="col-md-3 col-12">
            <Card title="Your status" icon="fas fa-edit">
              <UserStatus user={Session.getUser()} />
            </Card>

            <Card title="Announcements" icon="fas fa-bullhorn" doMargin={true} wrapBody={false}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesDashboard

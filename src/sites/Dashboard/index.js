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
        <Title title="Dashboard" />
        <div className="row">
          <div className="col-md-9 col-12">
            <BoardTaskContainerUser user={Session.getUser()} />
          </div>
          <div className="col-md-3 col-12">
            <Card title="Your status">
              <UserStatus user={Session.getUser()} />
            </Card>

            <Card title="Announcements" doMargin={true} wrapBody={false}>
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

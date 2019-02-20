import React from 'react'

import './Home.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'
import Card from 'components/Card'

const SitesHome = props => {
  return (
    <div className="SitesHome">
      <Content>
        <Title title="Dashboard" />
        <div className="row">
          <div className="col-9">
            <BoardTaskContainerUser user={Session.getUser()} />
          </div>
          <div className="col-3">
            <Card title="Your status">
              <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" />
              </div>
            </Card>

            <Card title="Announcements" doMargin={true} wrapBody={false}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesHome

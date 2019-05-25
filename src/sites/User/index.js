import React from 'react'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Widget from 'components/Widget'

import UserDetailsContainer from 'components/User/Details/container'

import SitesUserTabsContent from './components/Tabs'

const SitesUser = props => {
  const { user, handleInputChange, deleteUser } = props

  return (
    <div className="SitesUser">
      <Content>
        <Title title={`About ${user.firstname}`} />
        <div className="row">
          <div className="col-12 col-xl-8">
            <Widget title="Details" icon="fas fa-info-circle">
              <UserDetailsContainer user={user} handleInputChange={handleInputChange} />

              {Session.isAdmin() ? (
                <button className="btn btn-danger float-right ml-2" onClick={deleteUser}>
                  Remove
                </button>
              ) : null}
            </Widget>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 mt-3">
            <Widget title="More" icon="fas fa-ellipsis-h">
              <SitesUserTabsContent user={user} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesUser

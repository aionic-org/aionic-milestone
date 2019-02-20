import React from 'react'

import { Session } from 'services/session'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Card from 'components/Card'

import UserDetailsContainer from 'components/User/Details/container'

import SitesUserTabsContent from './components/Tabs/content'

const SitesUser = props => {
  const { user, handleInputChange, deleteUser } = props

  return (
    <div className="SitesUser">
      <Content>
        <Title title={`${user.firstname}`} />
        <div className="row">
          <div className="col-12 col-xl-8">
            <Card title="Details">
              <UserDetailsContainer user={user} handleInputChange={handleInputChange} />

              {Session.isAdmin() ? (
                <button className="btn btn-danger float-right" onClick={deleteUser}>
                  Remove
                </button>
              ) : null}
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 mt-4">
            <Card title="More">
              <SitesUserTabsContent user={user} />
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesUser

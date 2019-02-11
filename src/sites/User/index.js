import React from 'react'

import { Session } from 'services/session'

import Alert from 'components/UI/Alert'
import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import UserDetailsContainer from 'components/User/Details/container'

import SitesUserTabsContent from './components/Tabs/content'

const SitesUser = props => {
  const { user, handleInputChange, deleteUser, userUpdate } = props

  const userUpdateAlert = !userUpdate.status.length ? null : (
    <Alert
      assignedClass={userUpdate.status === 'Success' ? 'success' : 'danger'}
      title={userUpdate.status}
      message={userUpdate.msg}
    />
  )

  return (
    <div className="SitesUser">
      <Content>
        <Title title={`${user.firstname}`} />
        <div className="row">
          <div className="col-12 col-xl-8">
            <UserDetailsContainer user={user} handleInputChange={handleInputChange} />
          </div>
          <div className="col-xl-4">{userUpdateAlert}</div>
        </div>

        {Session.isAdmin() ? (
          <div className="row mt-2">
            <div className="col-8">
              <div className="float-right">
                <button className="btn btn-danger" onClick={deleteUser}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="row">
          <div className="col-xl-8 mt-4">
            <SitesUserTabsContent user={user} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesUser

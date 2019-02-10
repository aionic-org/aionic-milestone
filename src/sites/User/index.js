import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import UserDetails from 'components/User/Details'

import SitesUserTabsContent from './components/Tabs/content'

const SitesUser = props => {
  const { user } = props

  return (
    <div className="SitesUser">
      <Content>
        <Title title={'User'} />
        <div className="row">
          <div className="col-12 col-xl-8">
            <UserDetails user={user} />
          </div>
        </div>
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

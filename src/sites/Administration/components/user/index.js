import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Deck from 'components/Deck'

import Card from 'components/Card'

import UserInvitation from 'components/User/Invitation'

const AdministrationUser = props => (
  <Fetcher url="user">
    {users => (
      <div className="AdministrationUser">
        <Card title="Users">
          <UserInvitation />
          <Deck itemList={users} deckType="user" />
        </Card>
      </div>
    )}
  </Fetcher>
)

export default AdministrationUser

import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Deck from 'components/Deck'

import UserInvitation from 'components/User/Invitation'

const AdministrationUser = props => (
  <Fetcher url="user">
    {users => (
      <div className="AdministrationUser">
        <div className="mt-md-4">
          <UserInvitation />
        </div>
        <Deck itemList={users} deckType="user" />
      </div>
    )}
  </Fetcher>
)

export default AdministrationUser

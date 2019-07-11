import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Deck from 'components/Deck'

import Widget from 'components/Widget'

import UserInvitation from 'components/User/Invitation'

const AdministrationUser = props => (
  <Fetcher url="users">
    {users => (
      <div className="AdministrationUser">
        <UserInvitation />
        <hr className="featurette-divider" />
        <Deck itemList={users} deckType="User" />
      </div>
    )}
  </Fetcher>
)

export default AdministrationUser

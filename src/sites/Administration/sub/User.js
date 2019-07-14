import React from 'react'

import useFetcher from 'components/Utility/Hooks/useFetcher'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import UserInvitation from 'components/User/Invitation'
import UserTable from 'components/User/Table'

const AdministrationUser = props => {
  const [users, isLoading, error] = useFetcher('users')

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return <Error message={error} />
  } else {
    return (
      <div className="AdministrationUser">
        <UserInvitation />
        <hr className="featurette-divider" />
        <UserTable users={users} />
      </div>
    )
  }
}

export default AdministrationUser

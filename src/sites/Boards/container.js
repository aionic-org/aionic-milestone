import React from 'react'

import SitesTeam from '.'
import Fetcher from 'components/Utility/Fetcher'

const SitesBoardsContainer = props => (
  <Fetcher url="boards">
    {boards => (
      <div className="SitesBoardsContainer">
        <SitesTeam boards={boards} />
      </div>
    )}
  </Fetcher>
)

export default SitesBoardsContainer

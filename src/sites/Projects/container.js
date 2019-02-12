import React from 'react'

import SitesProjects from '.'
import Fetcher from 'components/Utility/Fetcher'

const SitesProjectsContainer = props => (
  <Fetcher url="project" wrapContent={true}>
    {projects => (
      <div className="SitesProjectsContainer">
        <SitesProjects projects={projects} />
      </div>
    )}
  </Fetcher>
)

export default SitesProjectsContainer

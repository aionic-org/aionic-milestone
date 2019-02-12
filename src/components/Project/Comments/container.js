import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import ProjectCommentsFormContainer from './Form/container'
import Comments from '../../Comments'

const ProjectCommentsContainer = props => (
  <Fetcher url={`project/${props.projectId}/comment`}>
    {(comments, fetchData) => {
      const { projectId, showForm } = props

      return (
        <div className="ProjectCommentsContainer">
          <Comments type="Project" typeId={projectId} commentList={comments} />
          {showForm ? (
            <div className="mt-4">
              <ProjectCommentsFormContainer projectId={projectId} updateParentState={fetchData} />
            </div>
          ) : null}
        </div>
      )
    }}
  </Fetcher>
)

ProjectCommentsContainer.defaultProps = {
  showForm: true
}

export default ProjectCommentsContainer

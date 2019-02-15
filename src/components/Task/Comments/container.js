import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import TaskCommentsFormContainer from './Form/container'
import Comments from '../../Comments'

const TaskCommentsContainer = props => (
  <Fetcher url={`task/${props.taskId}/comment`}>
    {(comments, fetchData) => {
      const { taskId, showForm } = props

      return (
        <div className="TaskCommentsContainer">
          <Comments type="Task" typeId={taskId} commentList={comments} />
          {showForm ? (
            <div className="mt-4">
              <TaskCommentsFormContainer taskId={taskId} updateParent={fetchData} />
            </div>
          ) : null}
        </div>
      )
    }}
  </Fetcher>
)

TaskCommentsContainer.defaultProps = {
  showForm: true
}

export default TaskCommentsContainer

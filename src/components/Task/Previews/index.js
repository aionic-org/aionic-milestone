import React from 'react'

import './Previews.css'

import TaskPreview from './Preview/'

const TaskPreviews = props => {
  const tmpArr = []
  let count = 0

  for (let i = 0; i < props.taskList.length; i++) {
    if (i % props.tasksPerRow === 0 || i === 0) {
      tmpArr[count] = []
      count++
    }
    tmpArr[count - 1].push(props.taskList[i])
  }

  return (
    <div className="TaskPreviews">
      {tmpArr.map((taskArr, i) => {
        return (
          <div className="card-deck" key={i}>
            {taskArr.map(task => {
              return <TaskPreview key={task.id} task={task} />
            })}
          </div>
        )
      })}
    </div>
  )
}

TaskPreviews.defaultProps = {
  taskList: [],
  tasksPerRow: 4
}

export default TaskPreviews

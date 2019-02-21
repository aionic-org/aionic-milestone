import React from 'react'

import './Deck.css'

import TaskPreview from 'components/Task/Preview'
import UserPreview from 'components/User/Preview'
import ProjectPreview from 'components/Project/Preview'
import GitOrganizationPreview from 'components/Git/Organization/Preview'

const Deck = props => {
  const tmpArr = []
  let count = 0

  for (let i = 0; i < props.itemList.length; i++) {
    if (i % props.itemsPerRow === 0 || i === 0) {
      tmpArr[count] = []
      count++
    }
    tmpArr[count - 1].push(props.itemList[i])
  }

  return (
    <div className="Deck">
      {tmpArr.map((itemArr, i) => {
        return (
          <div className="card-deck" key={i}>
            {itemArr.map(item => {
              switch (props.deckType) {
                case 'Task':
                  return <TaskPreview key={item.id} task={item} />
                case 'User':
                  return <UserPreview key={item.id} user={item} />
                case 'Project':
                  return <ProjectPreview key={item.id} project={item} />
                case 'Organization':
                  return <GitOrganizationPreview key={item.id} org={item} {...props} />
                default:
                  return null
              }
            })}
          </div>
        )
      })}
    </div>
  )
}

Deck.defaultProps = {
  itemList: [],
  itemsPerRow: 4,
  deckType: ''
}

export default Deck

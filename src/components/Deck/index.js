import React from 'react'

import './Deck.css'

import TaskPreview from 'components/Task/Preview'
import UserPreview from 'components/User/Preview'
import ProjectPreview from 'components/Project/Preview'
import GitOrganizationPreview from 'components/Git/Organization/Preview'
import AnnouncementPreview from 'components/Announcements/Preview'
import BoardPreview from 'components/Board/Preview'

const Deck = props => {
  const { itemList, itemsPerRow, deckType, showItemsNumber } = props

  const tmpArr = []
  let count = 0

  for (let i = 0; i < itemList.length; i++) {
    if (i % itemsPerRow === 0 || i === 0) {
      tmpArr[count] = []
      count++
    }
    tmpArr[count - 1].push(itemList[i])
  }

  const itemsNumber = showItemsNumber ? (
    <p className="d-inline-block text-muted font-weight-bold">Number of tasks: {itemList.length}</p>
  ) : null

  const content = tmpArr.length ? (
    tmpArr.map((itemArr, i) => {
      return (
        <div className="card-deck" key={i}>
          {itemArr.map(item => {
            switch (deckType) {
              case 'Task':
                return <TaskPreview key={item.id} task={item} />
              case 'User':
                return <UserPreview key={item.id} user={item} />
              case 'Project':
                return <ProjectPreview key={item.id} project={item} />
              case 'Organization':
                return <GitOrganizationPreview key={item.id} org={item} {...props} />
              case 'Announcement':
                return <AnnouncementPreview key={item.id} announcement={item} {...props} />
              case 'Board':
                return <BoardPreview key={item.id} board={item} {...props} />
              default:
                return null
            }
          })}
        </div>
      )
    })
  ) : (
    <div className="mt-4">
      <i className="d-block text-center fas fa-check-circle fa-lg" />
      <p className="text-center mt-1 mb-0">No results!</p>
    </div>
  )

  return (
    <div className="Deck">
      {itemsNumber}
      <div className="card-decks">{content}</div>
    </div>
  )
}

Deck.defaultProps = {
  itemList: [],
  itemsPerRow: 4,
  deckType: '',
  showItemsNumber: false
}

export default Deck

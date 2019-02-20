import React, { useState } from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Widget from 'components/Widget'

import BoardTaskContainerSearch from 'components/Board/Task/containers/search'
import TaskFilterContainer from 'components/Task/Filter/container'

const SitesSearch = props => {
  const { match } = props
  const [params, setParams] = useState({
    searchTerm: match.params.searchTerm || ''
  })

  const handleFilterChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (params[name] !== value) {
      setParams({ ...params, [name]: value })
    }
  }

  const resetFilters = e => {
    setParams({})
  }

  return (
    <div className="SitesSearch">
      <Content>
        <Title title="Search" />
        <div className="row">
          <div className="col-12 col-md-3">
            <Widget title="Filters" icon="fas fa-filter" showLastUpdate={false}>
              <TaskFilterContainer
                searchParams={params}
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              />
            </Widget>
          </div>
          <div className="col-12 col-md-9 mt-3 mt-md-0">
            <Widget title="Results" icon="fas fa-clipboard-list">
              <BoardTaskContainerSearch searchParams={params} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesSearch

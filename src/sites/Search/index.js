import React, { useState } from 'react'
import queryString from 'query-string'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Widget from 'components/Widget'

import SearchDashboardTaskContainer from 'components/Search/Dashboard/TaskContainer'
import TaskFilterContainer from 'components/Task/Filter/container'

const SitesSearch = props => {
  const { location } = props

  const [params, setParams] = useState({ ...queryString.parse(location.search) })

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
          <div className="col-12 col-xl-3">
            <Widget title="Filters" icon="fas fa-filter" showLastUpdate={false}>
              <TaskFilterContainer
                searchParams={params}
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              />
            </Widget>
          </div>
          <div className="col-12 col-xl-9 mt-3 mt-md-0">
            <Widget title="Results" icon="fas fa-clipboard-list">
              <SearchDashboardTaskContainer searchParams={params} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesSearch

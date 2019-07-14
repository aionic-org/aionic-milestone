import React, { useState } from 'react'
import queryString from 'query-string'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import SearchDashboardTaskContainer from './components/Dashboard/TaskContainer'
import SitesSearchFilter from './components/Filters/container'

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
            <SitesSearchFilter
              searchParams={params}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
            />
          </div>
          <div className="col-12 col-xl-9 mt-3 mt-md-0">
            <SearchDashboardTaskContainer searchParams={params} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesSearch

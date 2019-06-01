import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import Widget from 'components/Widget'

import GitOrganizationForm from 'components/Git/Organization/Form'
import Deck from 'components/Deck'

export class AdministrationGitHub extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      organizations: []
    }
  }

  componentDidMount = () => {
    Api.fetchData('git/organization')
      .then(organizations => {
        this.setState({ isLoading: false, organizations })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  addOrganization = organization => {
    const organizations = this.state.organizations.slice()
    organizations.push(organization)

    this.setState({ organizations })
  }

  removeOrganization = organization => {
    const organizationIdx = this.state.organizations.findIndex(org => org.id === organization.id)

    if (organizationIdx >= 0) {
      const organizations = this.state.organizations.slice()
      organizations.splice(organizationIdx, 1)
      this.setState({ organizations })
    }
  }

  updateOrganization = (oldOrg, newOrg) => {
    const organizationIdx = this.state.organizations.findIndex(org => org.id === oldOrg.id)

    if (organizationIdx >= 0) {
      const organizations = this.state.organizations.slice()
      organizations[organizationIdx] = newOrg
      this.setState({ organizations })
    }
  }

  render() {
    const { isLoading, msg, organizations } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      return (
        <div className="AdministrationGitHub">
          <Widget title="GitHub" icon="fab fa-github">
            <GitOrganizationForm updateParent={this.addOrganization} />
            <hr class="featurette-divider" />
            <div className="GitOrganizationContainer">
              <Deck
                itemList={organizations}
                deckType="Organization"
                itemsPerRow="1"
                handleDelete={this.removeOrganization}
                handleSync={this.updateOrganization}
              />
            </div>
          </Widget>
        </div>
      )
    }
  }
}

export default AdministrationGitHub

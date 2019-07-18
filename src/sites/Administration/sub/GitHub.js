import React, { Component } from 'react';

import Api from 'services/api';

import Error from 'components/UI/Error';
import Spinner from 'components/UI/Spinner';

import GitOrganizationForm from 'components/Git/Organization/Form';
import Deck from 'components/Deck';

class AdministrationGitHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msg: '',
      organizations: []
    };
  }

  componentDidMount = () => {
    Api.fetchData('git/organization')
      .then((organizations) => {
        this.setState({ isLoading: false, organizations });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        });
      });
  };

  addOrganization = (organization) => {
    this.setState((prevState) => {
      const organizations = prevState.organizations.slice();
      organizations.push(organization);

      return { organizations };
    });
  };

  removeOrganization = (organization) => {
    const organizationIdx = this.state.organizations.findIndex((org) => org.id === organization.id);

    if (organizationIdx >= 0) {
      this.setState((prevState) => {
        const organizations = prevState.organizations.slice();
        organizations.splice(organizationIdx, 1);

        return { organizations };
      });
    }
  };

  updateOrganization = (oldOrg, newOrg) => {
    const organizationIdx = this.state.organizations.findIndex((org) => org.id === oldOrg.id);

    if (organizationIdx >= 0) {
      this.setState((prevState) => {
        const organizations = prevState.organizations.slice();
        organizations[organizationIdx] = newOrg;

        return { organizations };
      });
    }
  };

  render() {
    const { isLoading, msg, organizations } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    if (msg.length) {
      return <Error message={msg} />;
    }

    return (
      <div className="AdministrationGitHub">
        <GitOrganizationForm updateParent={this.addOrganization} />
        <hr className="featurette-divider" />
        <div className="GitOrganizationContainer">
          <Deck
            itemList={organizations}
            deckType="Organization"
            itemsPerRow="1"
            handleDelete={this.removeOrganization}
            handleSync={this.updateOrganization}
          />
        </div>
      </div>
    );
  }
}

export default AdministrationGitHub;

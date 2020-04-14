import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getGroups } from './GraphService';

// Helper function to format Graph date/time
function formatDateTime(dateTime) {
    return moment.utc(dateTime).local().format('M/D/YY h:mm A');
}

export default class Group extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        };
    }

    async componentDidMount() {
        try {
            // Get the user's access token
            var accessToken = await window.msal.acquireTokenSilent({
                scopes: config.scopes
            });
            // Get the user's groups
            var groups = await getGroups(accessToken);
            // Update the array of groups in state
            this.setState({ groups: groups.value });
        } catch (err) {
            this.props.showError('ERROR', JSON.stringify(err));
        }
    }

    render() {
        return (
            <div>
                <h1>Groups</h1>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">createdDateTime</th>
                            <th scope="col">id</th>
                            <th scope="col">description</th>
                            <th scope="col">displayName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.groups.map(function (group) {
                            return (
                                <tr key={group.id}>
                                    <td>{group.createdDateTime}</td>
                                    <td>{group.id}</td>
                                    <td>{group.description}</td>
                                    <td>{group.displayName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

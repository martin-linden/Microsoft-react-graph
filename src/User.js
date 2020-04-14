import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getUsers } from './GraphService';

// Helper function to format Graph date/time
function formatDateTime(dateTime) {
    return moment.utc(dateTime).local().format('M/D/YY h:mm A');
}

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        try {
            // Get the user's access token
            var accessToken = await window.msal.acquireTokenSilent({
                scopes: config.scopes
            });
            // Get the user's users
            var users = await getUsers(accessToken);
            // Update the array of users in state
            this.setState({ users: users.value });
        } catch (err) {
            this.props.showError('ERROR', JSON.stringify(err));
        }
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">displayName</th>
                            <th scope="col">id</th>
                            <th scope="col">userPrincipalName</th>
                            <th scope="col">End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hej</td>
                        </tr>
                        {this.state.users.map(function (user) {
                            return (
                                <tr key={user.id}>
                                    <td>
                                        {user.displayName}
                                    </td>
                                    <td>{user.userPrincipalName}</td>
                                    <td>
                                        hej
									</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

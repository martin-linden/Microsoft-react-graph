import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getUsers } from './GraphService';
import { Button } from 'reactstrap';

// Helper function to format Graph date/time
function formatDateTime(dateTime) {
	return moment.utc(dateTime).local().format('M/D/YY h:mm A');

// const handleClick = () => {
// 		console.log('this is:', this);
// 	}
}

export default class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};
		// this.handleClick = this.handleClick.bind(this);
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
				<h1>Användare</h1>
				<Table>
					<thead>
						<tr>
							<th scope="col">Organisation</th>
							<th scope="col">id</th>
							<th scope="col">userPrincipalName</th>
							<th scope="col">getMemberGroups</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map(function(user) {
							return (
								<tr>
									<td>{user.organisation}</td>
									<td>{user.id}</td>
									<td>{user.userPrincipalName}</td>
									<td>{user.getMemberGroups}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				{/* <Button onClick={this.handleClick}> */}
				<Button>
					Skapa ny användare
				</Button>
			</div>
		);
	}
}

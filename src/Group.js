import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getGroups } from './GraphService';
import SignUpGroup from './SignUpGroup';

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
		this.handleGroupClick = this.handleGroupClick.bind(this);
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

	handleGroupClick(id) {
		console.log(id);
	}

	render() {
		return (
			<div>
				<h1>Grupper</h1>
				<Table>
					<thead>
						<tr>
							<th scope="col">Skapad datum</th>
							<th scope="col">Organisationskod</th>
							<th scope="col">Beskrivning</th>
							<th scope="col">Namn</th>
						</tr>
					</thead>
					<tbody>
						{this.state.groups.map((group) => {
							return (
								<tr
									key={group.id}
									onClick={() =>
										this.handleGroupClick(group.id)}
								>
									<td>{group.createdDateTime}</td>
									<td>{group.id}</td>
									<td>{group.description}</td>
									<td>{group.displayName}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<SignUpGroup />
			</div>
		);
	}
}

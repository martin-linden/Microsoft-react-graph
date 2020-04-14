import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getEvents } from './GraphService';

// Helper function to format Graph date/time
function formatDateTime(dateTime) {
	return moment.utc(dateTime).local().format('M/D/YY h:mm A');
}

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: []
		};
	}

	async componentDidMount() {
		try {
			// Get the user's access token
			var accessToken = await window.msal.acquireTokenSilent({
				scopes: config.scopes
			});
			// Get the user's events
			var events = await getEvents(accessToken);
			// Update the array of events in state
			this.setState({ events: events.value });
		} catch (err) {
			this.props.showError('ERROR', JSON.stringify(err));
		}
	}

	render() {
		return (
			<div>
				<h1>Kalender</h1>
				<Table>
					<thead>
						<tr>
							<th scope="col">Organisatör</th>
							<th scope="col">Ämne</th>
							<th scope="col">Starttid</th>
							<th scope="col">Sluttid</th>
						</tr>
					</thead>
					<tbody>
						{this.state.events.map(function(event) {
							return (
								<tr key={event.id}>
									<td>
										{event.organizer.emailAddress.name}
									</td>
									<td>{event.subject}</td>
									<td>
										{formatDateTime(
											event.start.dateTime
										)}
									</td>
									<td>
										{formatDateTime(
											event.end.dateTime
										)}
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

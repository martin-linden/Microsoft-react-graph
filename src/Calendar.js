import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from './Config';
import { getEvents } from './GraphService';
import Agenda from './Components/Agenda';

import {
	setMeetings,
	getMeetings,
	updateMeetingByID,
	meetingTypes
} from './meetingDB';

// Helper function to format Graph date/time
function formatDateTime(dateTime) {
	return moment.utc(dateTime).local().format('M/D/YY h:mm A');
}

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
			agenda: {
				location: '',
				subject: '',
				date: '',
				from: '',
				to: '',
				agendaItems: [ '', '', '' ]
			},
			selectedEvent: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEventClick = this.handleEventClick.bind(this);
	}
	getEventByID(id) {
		// const result = words.filter(word => word.length > 6);
		let selectedEvent = this.state.events.filter(
			(event) => event.id == id
		);
		console.log(selectedEvent[0]);
		let agendaState = { ...this.state.agenda };
		const agenda = {
			location: selectedEvent[0].location.displayName,
			subject: selectedEvent[0].subject,
			date: selectedEvent[0].start.dateTime
		};
		this.setState({ agenda: Object.assign(agendaState, agenda) });
	}
	handleChange(e) {
		console.log(e.target.name);
		let agendaState = { ...this.state.agenda };
		agendaState[e.target.name] = e.target.value;
		this.setState({ agenda: agendaState });
	}
	handleAgendaItemChange = (e, index) => {
		// not used at this time
		let agendaItems = this.state.agenda.agendaItems;
		let agendaState = { ...this.state.agenda };
		agendaItems[index] = e.target.value;
		let mergedAgenda = {
			agenda: Object.assign(agendaState, { agendaItems })
		};
		this.setState({ agenda: { agendaItems } });
	};
	addAgendaItem = () => {
		// not used at this time
		let agendaState = { ...this.state.agenda };
		agendaState.agendaItems.push('');
		this.setState({ agenda: agendaState });
	};
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.agenda);
		this.setState({ agenda: { location: '' } });
	}
	handleEventClick(e) {
		const selectedEvent = e.target
			.closest('tr')
			.getAttribute('data-id');
		this.getEventByID(selectedEvent);
		this.setState({ selectedEvent });
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
			setMeetings(events.value);
			let meeting = { meetingType: 'X' };
			updateMeetingByID(
				'AAMkADljMTE2MWQ5LThjZWQtNDMzNy05MmIwLTdiN2NmOWRiMjk2OABGAAAAAADBDpGaJZZqQKn6cew97Z8dBwB52p62yM8eQbWha4DiCMbpAAAAAAENAAB52p62yM8eQbWha4DiCMbpAAAV89ahAAA=',
				meeting
			);
			this.setState({ events: getMeetings() });

			//this.setState({ events: events.value });
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
							<th scope="col">Mötestyp</th>
							<th scope="col">Starttid</th>
							<th scope="col">Sluttid</th>
							<th scope="col">Plats</th>
							<th scope="col">Medlemmar</th>
						</tr>
					</thead>
					<tbody onClick={this.handleEventClick}>
						{this.state.events.map((event) => {
							{
								{
									//console.log(event);
								}
								{
									/* console.log(event.attendees[0]); */
								}
							}
							let condition =
								this.state.selectedEvent == event.id;
							return (
								<tr
									style={{
										backgroundColor: condition
											? 'grey'
											: 'white'
									}}
									key={event.id}
									data-id={event.id}
								>
									<td>
										{event.organizer.emailAddress.name}
									</td>
									<td>{event.subject}</td>
									<td>
										{event.meetingType &&
											meetingTypes[
												event.meetingType
											]}
									</td>
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
									<td>{event.location.displayName}</td>
									<td>
										{event.attendees.map(
											(attendee, index) => (
												<p key={index}>
													{
														attendee
															.emailAddress
															.name
													}
												</p>
											)
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<Agenda
					agenda={this.state.agenda}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					handleAgendaItemChange={this.handleAgendaItemChange}
				/>
			</div>
		);
	}
}

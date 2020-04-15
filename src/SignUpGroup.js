import React, { Component } from 'react';
import PasswordStrength from './Components/passwordstrength.js';
import { createGroup } from './GraphService';
import config from './Config';

import './SignUpGroup.css';

const initialState = {
	description: '',
	displayName: '',
	mailNickname: ''
};

export default class SignUpGroup extends Component {
	state = initialState;

	handleChange = (event) => {
		const isCheckbox = event.target.type === 'checkbox';
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value
		});
	};

	validate = () => {
		let nameError = '';
		let emailError = '';
		//let passwordError = '';
		/* 
		if (!this.state.name) {
			nameError = 'Organisationsnamn måste fyllas i';
		}

		if (!this.state.email.includes('@')) {
			emailError = 'Ej godkänd email';
		}

		if (emailError || nameError) {
			this.setState({ emailError, nameError });
			return false;
		}
 */
		return true;
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			try {
				// Get the user's access token
				var accessToken = await window.msal.acquireTokenSilent({
					scopes: config.scopes
				});
				// Get the user's groups
				createGroup(accessToken, this.state);
				// Update the array of groups in state
				//this.setState({ groups: groups.value });
			} catch (err) {
				console.log(err);
				//this.props.showError('ERROR', JSON.stringify(err));
			}

			console.log(this.state);
			// clear form
			this.setState(initialState);
		}
	};

	render() {
		return (
			<div class="formCard">
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							name="description"
							placeholder="Beskrivning"
							value={this.state.description}
							onChange={this.handleChange}
						/>
						<div style={{ fontSize: 12, color: 'red' }}>
							{this.state.nameError}
						</div>
					</div>
					<div>
						<input
							name="displayName"
							placeholder="Visningsnamn"
							value={this.state.displayName}
							onChange={this.handleChange}
						/>
						<div style={{ fontSize: 12, color: 'red' }}>
							{this.state.emailError}
						</div>
					</div>
					<div>
						<input
							name="mailNickname"
							placeholder="Mailnamn"
							value={this.state.mailNickname}
							onChange={this.handleChange}
						/>
						<div style={{ fontSize: 12, color: 'red' }}>
							{this.state.emailError}
						</div>
					</div>
					{/* 	<div>
						<PasswordStrength />

						<div style={{ fontSize: 12, color: 'red' }}>
							{this.state.passwordError}
						</div>
					</div> */}
					<button type="submit">submit</button>
				</form>
			</div>
		);
	}
}

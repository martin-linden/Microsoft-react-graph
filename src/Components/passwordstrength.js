import React from 'react';
import './passwordstrength.css';

const strongRegex = new RegExp(
	'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);
const mediumRegex = new RegExp(
	'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
);

class PasswordStrength extends React.Component {
	constructor() {
		super();
		this.state = {
			backgroundColor: '#ffff'
		};
		this.analyze = this.analyze.bind(this);
	}

	analyze(event) {
		if (strongRegex.test(event.target.value)) {
			this.setState({ backgroundColor: 'rgba(15, 157, 88, 0.3)' });
		} else if (mediumRegex.test(event.target.value)) {
			this.setState({ backgroundColor: 'rgba(244, 180, 0, 0.3)' });
		} else {
			this.setState({ backgroundColor: 'rgba(219, 68, 55, 0.3)' });
		}
	}

	render() {
		return (
			<div>
				<p>
					<input
						style={{
							backgroundColor: this.state.backgroundColor
						}}
						type="text"
						name="password"
						placeholder="Lösenord"
						onChange={this.analyze}
					/>
				</p>
			</div>
		);
	}
}

export default PasswordStrength;

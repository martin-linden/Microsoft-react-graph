import React from 'react';
import AgendaTable from './AgendaTable';
import Popup from 'reactjs-popup';

class AgendaPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({ open: true });
	}
	closeModal() {
		this.setState({ open: false });
	}

	render() {
		return (
			<div>
				<button className="button" onClick={this.openModal}>
					{this.props.firstName} {this.props.surname}
				</button>
				<Popup
					open={this.state.open}
					closeOnDocumentClick
					onClose={this.closeModal}
				>
					<div className="modal">
						<a className="close" onClick={this.closeModal}>
							&times;
						</a>
						<div className="form-info">
							<AgendaTable />
						</div>
					</div>
				</Popup>
			</div>
		);
	}
}

export default AgendaPopup;

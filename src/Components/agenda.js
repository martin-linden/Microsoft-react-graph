import React from 'react';

export class Agenda extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<p>Plats:</p>
				<input
					type="text"
					name="location"
					onChange={this.props.handleChange}
					value={this.props.agenda.location}
				/>
				<p>Ämne:</p>
				<input
					type="text"
					name="subject"
					onChange={this.props.handleChange}
					value={this.props.agenda.subject}
				/>
				<p>Mötesdag:</p>
				<input
					type="text"
					name="date"
					onChange={this.props.handleChange}
					value={this.props.agenda.date}
				/>
				{/* 				{this.props.agenda.agendaItems && this.props.agenda.agendaItems.map((item, index) => (
					<input
						type="text"
						name={index}
						value={item}
						onChange={(e) => this.props.handleAgendaItemChange(e, index)}
					/>

				))} */}
				<button type="submit">Spara</button>

			</form>
		);
	}
}
export default Agenda;

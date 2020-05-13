import React from 'react';
import RadioButtons from '../Components/RadioButtons';
import DataTableApp from './DataTableApp';

import AgendaTable from './AgendaTable';

export class Agenda extends React.Component {
	render() {
		return (
			<div>
				<h1>Agenda</h1>
				<div class="form-group">
					<form onSubmit={this.props.handleSubmit}>
						<div class="form-row">
							<div class="col">
								<p>Plats:</p>
								<input
									type="text"
									class="form-control"
									name="location"
									onChange={this.props.handleChange}
									value={this.props.agenda.location}
								/>
							</div>
							<div class="col">
								<p>Titel:</p>
								<input
									type="text"
									class="form-control"
									name="topic"
									/* onChange={this.props.handleChange}
							value={this.props.agenda.location}  */
								/>
							</div>
						</div>

						<div class="form-row">
							<div class="col">
								<p>Mötesdag:</p>
								<input
									type="text"
									class="form-control"
									name="date"
									onChange={this.props.handleChange}
									value={this.props.agenda.date}
								/>
							</div>

							<div class="col">
								<p>Projekt:</p>
								<input
									type="text"
									class="form-control"
									name="project"
								/>
							</div>
						</div>

						<p>Ämne:</p>
						<input
							type="text"
							class="form-control"
							name="subject"
							onChange={this.props.handleChange}
							value={this.props.agenda.subject}
						/>
					</form>
				</div>
				<br />
				<div class="form-row">
					<div class="col">
						<th>Ledamöter</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>

						<th>Gäster</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
					<div class="col">
						<th>E-post</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<th>-</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
					<div class="col">
						<th>Anmäld frånvaro</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<th>-</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
				</div>
				<br />
				{/* 
				<div class="form-row">
					<div class="col">
						<th>Tid/punkt</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
					<div class="col">
						<th>Text</th>
						<input
							type="text"
							class="form-control"
							name="subject"
							placeholder="Formalia"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
					<div class="col">
						<th>Ansv</th>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>
						<input
							type="text"
							class="form-control"
							name="subject"
						/>

						<input
							type="text"
							class="form-control"
							name="subject"
						/>
					</div>
					<div class="col">
						<th>BID</th>
						<RadioButtons />
						<RadioButtons />
						<RadioButtons />
						<RadioButtons />
					</div>

				</div>

				<br />

				<button type="submit" class="btn btn-primary">
					Spara
				</button> */}
				<AgendaTable />
				<DataTableApp />
			</div>
		);
	}
}
export default Agenda;

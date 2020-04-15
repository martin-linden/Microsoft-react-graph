import React from 'react';
// import config from './Config';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';


// Helper function to format Graph date/time
// function formatDateTime(dateTime) {
// 	return moment.utc(dateTime).local().format('M/D/YY');


export default class Meeting extends React.Component {
	constructor(props) {
        super(props);
        this.state = {value: 'once'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
       //ALERTMEDDELANDE
      handleSubmit(event) {
      alert('Du har valt mötestypen: ' + this.state.value);
      event.preventDefault();
      } 
   
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Lista mötestyp:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="once">E-Enstaka</option>
                <option value="repeet">R-Återkommande</option>
                <option value="extern">X-Externt</option>
                <option value="public">O-Offentligt</option>
              </select>
            </label>
            <input type="submit" value="ok" />
      
          <Table>
					<thead>
						<tr>
							<th scope="col">Aktuella möten</th>
							<th scope="col">Mötestyp</th>
							<th scope="col">Organisationskod</th>
							<th scope="col">Organisatör</th>
              <th scope="col">Beskrivning</th>
						</tr>
					</thead>
					<tbody>
						{/* {this.state.meetings.map(function(meeting) {
							return ( */}
								<tr>
									<td>Drakar och demoner</td>
									<td>E-Enstaka</td>
									<td>AAA</td>
									<td>Ronneby Kommun</td>
								</tr>
                <tr>
									<td>Medeltidsveckan</td>
									<td>R-Återkommande</td>
									<td>AAAB</td>
									<td>Gotlands kommun</td>
								</tr>
                <tr>
									<td>COVID-19</td>
									<td>R-Återkommande</td>
									<td>AAA</td>
									<td>Stockholm Stad</td>
								</tr>
					</tbody>
				</Table>
        </form>
        );
      }
    }
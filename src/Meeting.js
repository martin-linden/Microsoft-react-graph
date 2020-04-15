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
        this.state = {value: 'E-Enstaka'};
    
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
            <Button>
            <input type="submit" value="OK" />
            </Button>
          </form>
        );
      }
    }
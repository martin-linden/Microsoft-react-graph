import React, { Component } from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import DataTable from './DataTable';
import './DataTable.css';

class DataTableApp extends Component {
	render() {
		const headings = [ 'Tid/punkt', '', 'Ansv', 'B', 'I', 'D' ];

		const rows = [
			[
				'1',
				'Formalia -	Öppnande -	Beslutförighet',
				'',
				'',
				'',
				''
			],
			[ '2', 'Val av sekreterare', '', '', '', '' ],
			[ '3', 'Godkännande av agenda', '', '', '', '' ],
			[
				'4',
				'Godkännande, utestående punkter från föreg protkoll',
				'',
				'',
				'',
				''
			],
			[ '5', 'hej', '', '', '', '' ],
			[ '6', 'dummy text', '', '', '', '' ],
			[ '7', 'dummy text', '', '', '', '' ],
			[ '8', 'dummy text', '', '', '', '' ],
			[ '9', 'Övriga frågor', '', '', '', '' ],
			[ '10', 'Nästa möte', '', '', '', '' ],
			[ '11', 'Avslutning', '', '', '', '' ]
		];

		return (
			<AppProvider>
				<Page title="Data table">
					<DataTable headings={headings} rows={rows} />
				</Page>
			</AppProvider>
		);
	}
}

export default DataTableApp;

import React, { useState } from 'react';

import { useTable, usePagination, useBlockLayout } from 'react-table';

import makeData from './makeData';
import { Container } from 'reactstrap';

// Create an editable cell renderer
const EditableCell = ({
	value: initialValue,
	row: { index },
	column: { id },
	updateMyData // This is a custom function that we supplied to our table instance
}) => {
	// We need to keep and update the state of the cell normally
	const [ value, setValue ] = useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	// We'll only update the external data when the input is blurred
	const onBlur = () => {
		updateMyData(index, id, value);
	};

	// If the initialValue is changed external, sync it up with our state
	React.useEffect(
		() => {
			setValue(initialValue);
		},
		[ initialValue ]
	);

	return (
		<input
			style={{ width: '100%' }}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
	Cell: EditableCell
};

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
	// For this example, we're using pagination to illustrate how to stop
	// the current page from resetting when our data changes
	// Otherwise, nothing is different here.
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			// use the skipPageReset option to disable page resetting temporarily
			autoResetPage: !skipPageReset,
			// updateMyData isn't part of the API, but
			// anything we put into these options will
			// automatically be available on the instance.
			// That way we can call this function from our
			// cell renderer!
			updateMyData
		},
		usePagination,
		useBlockLayout
	);

	// Render the UI for your table
	return (
		<Container>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* <div className="usePagination">
				<button
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>
					{'<<'}
				</button>{' '}
				<button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					{'<'}
				</button>{' '}
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{'>'}
				</button>{' '}
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					{'>>'}
				</button>{' '}
				<span>
					Page{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{' '}
				</span>
				<span>
					| Go to page:{' '}
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(page);
						}}
						style={{ width: '100px' }}
					/>
				</span>{' '}
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[ 10, 20, 30, 40, 50 ].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div> */}
		</Container>
	);
}

const initialAgenda = [
	{
		slot: 1,
		description: 'Formalia -	Öppnande -	Beslutförighet',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 2,
		description: 'Val av sekreterare',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 3,
		description: 'Godkännande av agenda',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 4,
		description: 'Godkännande, utestående punkter från föreg protkoll',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 5,
		description: 'hej',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 6,
		description: 'Formalia -	Öppnande -	Beslutförighet',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 7,
		description: 'Formalia -	Öppnande -	Beslutförighet',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 8,
		description: 'Formalia -	Öppnande -	Beslutförighet',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 9,
		description: 'Övriga frågor',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 10,
		description: 'Nästa möte',
		responsible: '',
		B: '',
		I: '',
		D: ''
	},
	{
		slot: 11,
		description: 'Avslutning',
		responsible: '',
		B: '',
		I: '',
		D: ''
	}
];
function AgendaTable() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Test',
				columns: [
					{
						Header: 'Tid/punkt',
						accessor: 'slot',
						width: 150
					},
					{
						Header: '',
						accessor: 'description',
						minWidth: 500
					}
				]
			},
			{
				// Header: 'MerTest',
				Header: 'Test',
				accessor: 'responsible',
				width: 200,
				columns: [
					{
						Header: 'Ansvarig',
						accessor: 'responsible',
						width: 200
					},
					{
						Header: 'B',
						accessor: 'B',
						width: 30
					},
					{
						Header: 'I',
						accessor: 'I',
						width: 30
					},
					{
						Header: 'D',
						accessor: 'D',
						width: 30
					}
				]
			}
		],
		[]
	);

	const [ data, setData ] = React.useState(() => initialAgenda);
	const [ originalData ] = React.useState(data);
	const [ skipPageReset, setSkipPageReset ] = React.useState(false);

	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data
	const updateMyData = (rowIndex, columnId, value) => {
		// We also turn on the flag to not reset the page
		setSkipPageReset(true);
		setData((old) =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value
					};
				}
				return row;
			})
		);
		console.log('Change done, call something');
	};

	// After data chagnes, we turn the flag back off
	// so that if data actually changes when we're not
	// editing it, the page is reset
	React.useEffect(
		() => {
			setSkipPageReset(false);
		},
		[ data ]
	);

	// Let's add a data resetter/randomizer to help
	// illustrate that flow...
	const resetData = () => setData(originalData);
	console.log(data);
	return (
		<div>
			<button onClick={resetData}>Reset Data</button>
			<Table
				columns={columns}
				data={data}
				updateMyData={updateMyData}
				skipPageReset={skipPageReset}
			/>
		</div>
	);
}

export default AgendaTable;

import React, {Component} from 'react';
import Download from '../components/download/download';

var headers = ['ID', 'Transactions ID', 'Volume', 'Markup', 'Exchange Fee', 'Webmaster Fee', 'Revenue'];
var data = [
	[100, 'dfdf-234dfe-ffdf2-e43fdfd', 100, 0.5, 0.1, 0.2, 0.2],
	[99, 'dfdf52-3dfe-ffdf2-e43fdfd', 10, 0.05, 0.02, 0.015, 0.015],
	[99, 'dfdf52-3dfe-ffdf2-e43fdfd', 10, 0.05, 0.02, 0.015, 0.015]
];

class TotalMockup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	totalMockup = 0;

	render() {

		for (var i = 0; i < data.length; i++) {
			this.totalMockup += data[i][this.props.index];
		}

		return this.totalMockup.toFixed(2);

	}
}

class Table extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	search = (e) => {
		e.preventDefault();
		var needle = e.target.querySelector('input').value.toLowerCase();
		if (!needle) {
			this.setState({data: this.props.initialData});
			return;
		}

		var searchdata = this.props.initialData.filter(function (data) {
			return data.toString().toLowerCase().indexOf(needle) > -1;
		});

		this.setState({data: searchdata});
	};

	render() {
		return (

			<div>
				<div className="search">
					<form className="search__form" onSubmit={this.search}>
						<input type="text" className="search__input"/>
						<button className="btn btn_border" type="submit">Find Webmaster</button>
					</form>

				</div>
				<Download/>
				<div className="table__wrapper table__wrapper_transactions">
					<table ref="table" className="table">
						<thead>
						<tr>
							<th className="table__head table__big table__empty"/>
							<th className="table__head table__big table__head_accent">Total Transactions</th>
							<th className="table__head table__big table__head_accent">Total Volume</th>
							<th className="table__head table__big table__head_accent">Total Markup</th>
							<th className="table__head table__big table__head_accent">Total Exchange Fee</th>
							<th className="table__head table__big table__head_accent">Total Webmaster Fee</th>
							<th className="table__head table__big table__head_accent">Total Revenue</th>
						</tr>
						</thead>
						<tbody>

						<tr>
							<td/>
							<td  className="table__prop table__big">
								{this.state.data.length}
							</td>
							<td  className="table__prop table__big">
								<TotalMockup index={2} initialData={data}/> BTC
							</td>
							<td  className="table__prop table__big">
								<TotalMockup index={3} initialData={data}/> BTC (<TotalMockup index={3} initialData={data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup index={4} initialData={data}/> BTC (<TotalMockup index={4} initialData={data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup index={5} initialData={data}/> BTC (<TotalMockup index={5} initialData={data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup index={6} initialData={data}/> BTC (<TotalMockup index={6} initialData={data}/>%)
							</td>
						</tr>

						</tbody>
					</table>
					<table ref="table" className="table">
						<thead>
						<tr>
							{headers.map((header, index) => {
								return <th className="table__head table__big table__head_accent"
								           key={index}>{header}</th>
							})}
						</tr>
						</thead>
						<tbody>
						{this.state.data.map((row, rowindex) =>
							<tr key={rowindex}>
								{<td className="table__prop table__big">{row[0]}</td>}
								{<td className="table__prop table__big">{row[1]} </td>}
								{<td className="table__prop table__big">{row[2] + " BTC"}</td>}
								{<td className="table__prop table__big">{row[3] + " BTC" + " (" + row[3] + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row[4] + " BTC" + " (" + row[4] + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row[5] + " BTC" + " (" + row[5] + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row[6] + " BTC" + " (" + row[6] + "%" + ")"}</td>}
							</tr>)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

class TableTransactions extends Component {
	render() {
		return (
			<Table headers={headers} initialData={data}/>
		);
	}
}

export default TableTransactions;

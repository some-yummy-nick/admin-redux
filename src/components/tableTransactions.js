import React, {Component} from 'react';
import Download from '../components/download/download';
import transactions from '../transactions.json';
import  _ from "lodash";

var headers = ['ID', 'Transactions ID', 'Volume', 'Markup', 'Exchange Fee', 'Webmaster Fee', 'Revenue'];

class TotalMockup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	totalMockup = 0;

	render() {
		for (var i = 0; i < this.state.data.length; i++) {
			this.totalMockup += this.state.data[i][this.props["data-index"]];
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
			return _.values(data).toString().toLowerCase().indexOf(needle) > -1;
		});

		this.setState({data: searchdata});
	};

	render() {
		return (

			<div>
				<div className="search">
					<form className="search__form" onSubmit={this.search}>
						<input type="text" className="search__input"/>
						<button className="btn btn_border" type="submit">Find Transactions</button>
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
								<TotalMockup data-index="volume" initialData={this.state.data}/> BTC
							</td>
							<td  className="table__prop table__big">
								<TotalMockup data-index="markup" initialData={this.state.data}/> BTC (<TotalMockup data-index="markup" initialData={this.state.data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup data-index="exchangeFee" initialData={this.state.data}/> BTC (<TotalMockup data-index="exchangeFee" initialData={this.state.data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup data-index="webmasterFee" initialData={this.state.data}/> BTC (<TotalMockup data-index="webmasterFee" initialData={this.state.data}/>%)
							</td>
							<td  className="table__prop table__big">
								<TotalMockup data-index="revenue" initialData={this.state.data}/> BTC (<TotalMockup data-index="revenue" initialData={this.state.data}/>%)
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
								{<td className="table__prop table__big">{row.id}</td>}
								{<td className="table__prop table__big">{row.transactionsId} </td>}
								{<td className="table__prop table__big">{row.volume + " BTC"}</td>}
								{<td className="table__prop table__big">{row.markup + " BTC" + " (" + row.markup + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row.exchangeFee + " BTC" + " (" + row.exchangeFee + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row.webmasterFee + " BTC" + " (" + row.webmasterFee + "%" + ")"}</td>}
								{<td className="table__prop table__big">{row.revenue + " BTC" + " (" + row.revenue + "%" + ")"}</td>}
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
			<Table headers={headers} initialData={transactions}/>
		);
	}
}

export default TableTransactions;

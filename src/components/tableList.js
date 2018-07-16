import React, {Component} from 'react';
import Download from '../components/download/download';
import {Link} from 'react-router-dom';
import  _ from "lodash";

import items from '../items.json';

var headers = ['ID', 'Email', 'Referrals', 'Transactions', 'Volume', 'Total income', 'Total withdrawal', 'Balance', 'Revenue Share', 'Label'];

class Table extends Component {

	constructor(props) {
		super(props);
		this.state={
			data:this.props.initialData
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

	clickEdit = (e) => {

		var currentItem = e.currentTarget.getAttribute("data-current");
		localStorage.setItem('item',currentItem);
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
				<div className="table__wrapper">
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
						{this.state.data.map((item, index) => {
							return (<tr key={index}>
								<td className="table__prop table__big">{item.id}</td>
								<td className="table__prop table__big">{item.email}
									<Link to="edit" onClick={this.clickEdit} data-current={item.id}  refs={index}  className="edit">
										<span className="icon icon_edit" aria-hidden="true"/>
										<span className="table__text">Edit</span>
									</Link>
								</td>
								<td className="table__prop table__big">{item.referrals}</td>
								<td className="table__prop table__big">{item.transactions}</td>
								<td className="table__prop table__big">{item.volume}</td>
								<td className="table__prop table__big">{item.totalIncome}</td>
								<td className="table__prop table__big">{item.totalWithdrawal}</td>
								<td className="table__prop table__big">{item.balance}</td>
								<td className="table__prop table__big">{item.revenueShare}</td>
								<td className="table__prop table__big">{item.label}</td>
								<td className="table__empty">
									<button type="button" className="btn btn_freeze">Freeze</button>
									<button type="button" className="btn btn_ban">Ban</button>
								</td>
							</tr>);
						})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

class TableList extends Component {

	render() {
		return (
			<Table headers={headers} initialData={items}/>
		);
	}
}

export default TableList;

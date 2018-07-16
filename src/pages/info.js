import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Download from '../components/download/download';
import Paginator from '../components/paginator/paginator';
import numbers from '../numbers.json';

class Info extends Component {
	render() {
		return (
			<div>
				<Link to="/edit" className="back">
					<span className="icon icon_back"/>
					<span className="back__text">Back</span>
				</Link>
				<Download/>
				<div className="table__wrapper table__wrapper_info">
					<table className="table">
						<tbody>
						<tr>
							<th className="table__head table__small table__empty"/>
							<th className="table__head table__small table__head_name">ID</th>
							<th className="table__head table__small table__head_name">Source</th>
							<th className="table__head table__small table__head_name">Transactions</th>
							<th className="table__head table__small table__head_name">Volume</th>
							<th className="table__head table__small table__head_name">Total Income</th>
							<th className="table__head table__small table__head_name">Total Webmaster Income</th>
							<th className="table__head table__small table__head_name">Total Net Income</th>
						</tr>
						{numbers.map((number, index) => {
							return (<tr key={index}>
								<td className="table__value table__big">{number.day}</td>
								<td className="table__value table__big">{number.id}</td>
								<td className="table__value table__big js-value" data-set="Total-Unique-User">{number.source}</td>
								<td className="table__value table__big js-value" data-set="Total-Leads">{number.transactions}</td>
								<td className="table__value table__big js-value" data-set="Total-Trx">{number.Volume}</td>
								<td className="table__value table__big js-value" data-set="Total-Income">{number.TotalIncome}</td>
								<td className="table__value table__big js-value" data-set="Total-Webmasters-Income">{number.TotalWebmasterIncome}</td>
								<td className="table__value table__big js-value" data-set="Total-Net-Income">{number.TotalNetIncome}</td>
							</tr>);
						})}
						</tbody>
					</table>
				</div>

				<Paginator/>
			</div>

		);
	}
}

export default Info;
import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import 'chartist/dist/chartist.min.css';
import 'chartist/dist/chartist.min.js';
import Download from '../../components/download/download';
import numbers from '../../numbers.json';

var data = {
	series: [{data: []}
	]
};

var summ = [];

Array.prototype.forEach.call(numbers, function (child) {
	data.series[0].data.push(child.TotalUniqueUser)
});

var options = {
	fullWidth: true,
};

var type = 'Line';

class Chartist extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 'TotalUniqueUser',
			data: data,
			numbers: numbers
		};
	}

	updateData = (filter) => {
		data.series[0].data = [];
		Array.prototype.forEach.call(numbers, function (child) {
			data.series[0].data.push(child[filter])
		});
		this.setState({
			data: data
		});
	};

	setFilter = (filter) => {
		this.setState({
			selected: filter,
			data: {}
		});
		this.updateData(filter);
	};

	isActive = (value) => {
		return 'set__button js-set-button ' + ((value === this.state.selected) ? 'active' : '');
	};

	setSumm = (filter) => {
		summ = [];
		Array.prototype.forEach.call(numbers, function (child) {

			summ.push(child[filter]);
		});
		return summ.reduce((a, b) => a + b, 0);
	};


	render() {

		return (
			<div>

				<ChartistGraph data={this.state.data} options={options} type={type}/>
				<div className="set">
					<div className="set__wrapper">

						<button type="button" className={this.isActive('TotalUniqueUser')}
						        onClick={this.setFilter.bind(this, 'TotalUniqueUser')}>
							Total Unique User
						</button>
						<button type="button" className={this.isActive('TotalLeads')}
						        onClick={this.setFilter.bind(this, 'TotalLeads')}>Total Leads
						</button>
						<button type="button" className={this.isActive('TotalTrx')}
						        onClick={this.setFilter.bind(this, 'TotalTrx')}>Total Trx
						</button>
						<button type="button" className={this.isActive('TotalVolume')}
						        onClick={this.setFilter.bind(this, 'TotalVolume')}>Total Volume
						</button>
						<button type="button" className={this.isActive('TotalIncome')}
						        onClick={this.setFilter.bind(this, 'TotalIncome')}>Total Income
						</button>
						<button type="button" className={this.isActive('TotalWebmasters')}
						        onClick={this.setFilter.bind(this, 'TotalWebmasters')}>
							Total Webmasters
						</button>
						<button type="button" className={this.isActive('TotalWebmasterIncome')}
						        onClick={this.setFilter.bind(this, 'TotalWebmasterIncome')}
						>Total Webmaster Income
						</button>
						<button type="button" className={this.isActive('TotalNetIncome')}
						        onClick={this.setFilter.bind(this, 'TotalNetIncome')}>
							Total-Net-Income
						</button>
					</div>
				</div>
				<Download/>
				<div className="table__wrapper">
					<table className="table">
						<tbody>
						<tr>
							<th className="table__head table__small table__empty"></th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalUniqueUser")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalLeads")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalTrx")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalVolume")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalIncome")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalWebmasters")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalWebmasterIncome")}</th>
							<th className="table__head table__small table__head_accent">{this.setSumm("TotalNetIncome")}</th>
						</tr>
						<tr>
							<th className="table__head table__small table__empty"></th>
							<th className="table__head table__small table__head_name">Total Unique User</th>
							<th className="table__head table__small table__head_name">Total Leads</th>
							<th className="table__head table__small table__head_name">Total Trx</th>
							<th className="table__head table__small table__head_name">Total Volume</th>
							<th className="table__head table__small table__head_name">Total Income</th>
							<th className="table__head table__small table__head_name">Total Webmasters</th>
							<th className="table__head table__small table__head_name">Total Webmaster Income</th>
							<th className="table__head table__small table__head_name">Total Net Income</th>
						</tr>
						{numbers.map((number, index) => {
							return (<tr key={index}>
								<td className="table__value table__big">{number.day}</td>
								<td className="table__value table__big js-value" data-set="Total-Unique-User">{number.TotalUniqueUser}</td>
								<td className="table__value table__big js-value" data-set="Total-Leads">{number.TotalLeads}</td>
								<td className="table__value table__big js-value" data-set="Total-Trx">{number.TotalTrx}</td>
								<td className="table__value table__big js-value" data-set="Total-Volume">{number.TotalVolume}</td>
								<td className="table__value table__big js-value" data-set="Total-Income">{number.TotalIncome}</td>
								<td className="table__value table__big js-value" data-set="Total-Webmasters-Income">{number.TotalWebmasters}</td>
								<td className="table__value table__big js-value" data-set="Total-Webmasters-Income">{number.TotalWebmasterIncome}</td>
								<td className="table__value table__big js-value" data-set="Total-Net-Income">{number.TotalNetIncome}</td>
							</tr>);
						})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Chartist;
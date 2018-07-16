import React, {Component} from 'react';
import Paginator from '../components/paginator/paginator';
import TableTransactions from '../components/tableTransactions';

class Transactions extends Component {
	render() {
		return (
			<div>
				<TableTransactions/>
				<Paginator/>
			</div>

		);
	}
}

export default Transactions;
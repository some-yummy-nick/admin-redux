import React, {Component} from 'react';
import TableList from '../components/tableList';
import Paginator from '../components/paginator/paginator';

class List extends Component {


	render() {
		return (
			<div>
				<TableList />
				<Paginator/>
			</div>

		);
	}
}

export default List;
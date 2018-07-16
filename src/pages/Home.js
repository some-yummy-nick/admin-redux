import React, {Component} from 'react';
import Paginator from '../components/paginator/paginator';
import Chartist from '../components/chartist/chartist';

class Home extends Component {
	render() {
		return (
			<div>
				<Chartist/>
				<Paginator/>
			</div>

		);
	}
}

export default Home;
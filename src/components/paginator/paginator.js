import React, {Component} from 'react';
import '../../components/paginator/paginator.css';

class Paginator extends Component {
	render() {
		return (
			<div className="paginator">
				<div className="paginator__wrapper">
					<a href="#" className="paginator__button paginator__prev">Previous</a>
					<ul className="paginator__list">
						<li className="paginator__item"><a href="#" className="paginator__link">1</a></li>
						<li className="paginator__item"><a href="#" className="paginator__link">2</a></li>
						<li className="paginator__item"><a href="#" className="paginator__link">3</a></li>
						<li className="paginator__item"><a href="#" className="paginator__link">4</a></li>
						<li className="paginator__item"><span className="paginator__more">...</span></li>
					</ul>
					<a href="#" className="paginator__button paginator__next">Next</a>
				</div>
			</div>

		);
	}
}

export default Paginator;
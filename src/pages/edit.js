import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Paginator from '../components/paginator/paginator';
import Chartist from '../components/chartist/chartist';
import items from '../items.json';

var headers = ["ID", "Email", "Referrals", "Transactions", "Volume", "Total income", "Total withdrawal", "Balance", "Revenue Share", "Label"];

var dataItem = [];

class Edit extends Component {
	getItem = () => {
		var currentItem = Number(localStorage.getItem('item'));
		dataItem=[];
		items.map(item => {
			if (item.id === currentItem) {

				for(var prop in item) {
				 dataItem.push(item[prop]);
				}
			}
		});
	};

	render() {

		this.getItem();

		return (
			<div>
				<Link to="/list" className="back">
					<span className="icon icon_back"/>
					<span className="back__text">Back</span>
				</Link>
				<table className="table">
					<thead>
					<tr>
						{headers.map((header, index) => {
							return <th className="table__head table__big table__head_accent" key={index}>{header}</th>
						})}
					</tr>
					</thead>
					<tbody>
					{
						<tr>
							{<td className="table__prop table__big">{dataItem[0]}</td>}
							{<td className="table__prop table__big">{dataItem[1]}
								<Link to="edit" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Edit</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{dataItem[2]}
								<Link to="info" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Info</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{dataItem[3]}</td>}
							{<td className="table__prop table__big">{dataItem[4]}</td>}
							{<td className="table__prop table__big">{dataItem[5]}</td>}
							{<td className="table__prop table__big">{dataItem[6]}</td>}
							{<td className="table__prop table__big">{dataItem[7]}</td>}
							{<td className="table__prop table__big">{dataItem[8]}
								<Link to="edit" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Edit</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{dataItem[9]}
								<Link to="edit" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Edit</span>
								</Link>
							</td>}
							{<td className="table__empty">
								<button type="button" className="btn btn_freeze">Freeze</button>
								<button type="button" className="btn btn_ban">Ban</button>
							</td>}
						</tr>}
					</tbody>
				</table>
				<Chartist/>
				<Paginator/>
			</div>

		);
	}
}

export default Edit;
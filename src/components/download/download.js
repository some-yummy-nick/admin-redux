import React, {Component} from 'react';
import '../../components/download/download.css';

class Download extends Component {
	saveToExcel = () => {
		var uri = 'data:application/vnd.ms-excel;base64,',
			template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
			base64 = function (s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			},
			format = function (s, c) {
				return s.replace(/{(\w+)}/g, function (m, p) {
					return c[p];
				})
			},
			table = document.querySelector(".table__wrapper"),
			name = 'W3C Example Table',
			tableClone = table.cloneNode(true);
		var editTable = tableClone.querySelectorAll(".edit");
		var tableEmpty = tableClone.querySelectorAll(".table__big ~ .table__empty");

		Array.prototype.forEach.call(editTable, function(child) {
			child.parentNode.removeChild(child);
		});
		Array.prototype.forEach.call(tableEmpty, function(child) {
			child.parentNode.removeChild(child);
		});
		var ctx = {worksheet: name || 'Worksheet', table: tableClone.innerHTML};
		window.location.href = uri + base64(format(template, ctx))
	};

	render() {
		return (
			<button type="button" className="download" onClick={this.saveToExcel}>
				<span className="icon icon_download" aria-hidden="true"/>
				<span className="download__text">Save as Excel file</span>
			</button>

		);
	}
}

export default Download;
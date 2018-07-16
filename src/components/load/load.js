import React, {Component} from 'react';
import '../../components/load/load.css';
import ContentEditable from 'react-contenteditable';

class AppComponent extends Component {
	state = {
		numChildren: 0,
		htmlInner: 'Banner #1'
	};

	addChild = () => {
		this.setState({
			numChildren: this.state.numChildren + 1
		});

	};

	newName = (input) => {
		var currentItem = input.parentNode.parentNode.parentNode.parentNode;
		var currentName = currentItem.querySelector('.js-file-name');
		currentName.innerHTML = input.files[0].name;
	};

	loadImage = (e) => {
		var that = this;
		var input = e.currentTarget;
		if (input.files && input.files[0]) {
			if (input.files[0].type.match('image.*')) {
				var reader = new FileReader();
				reader.onload = function () {
					that.newName(input);
				};
				reader.readAsDataURL(input.files[0]);
			} else console.log('is not image mime type');
		} else console.log('not isset files data or files API not supported');
	};

	deleteItem = (e) => {
		var currentItem = e.currentTarget.parentNode.parentNode.parentNode;
		currentItem.parentNode.removeChild(currentItem);
	};

	render() {
		const children = [];

		for (var i = 0; i < this.state.numChildren; i += 1) {
			children.push(<ChildComponent loadImage={this.loadImage} deleteItem={this.deleteItem}
			                              htmlInner={this.state.htmlInner} key={i}
			                              number={i}/>);
		}

		return (
			<ParentComponent addChild={this.addChild} htmlInner={this.state.htmlInner}
			                 loadImage={this.loadImage} deleteItem={this.deleteItem}>
				{children}
			</ParentComponent>
		);
	}


}

const ParentComponent = props => (
	<div className="load">
		<ol className="load__list js-file-list">
			<li className="load__item js-item">
				<div className="load__inner">
					<div className="load__block">
						<div className="load__title">Name</div>
						<ContentEditable className="load__name js-file-name"
						                 html={props.htmlInner} // innerHTML of the editable div
						                 disabled={false}       // use true to disable edition
						                 onChange={props.handleChange} // handle innerHTML change
						/>
					</div>
					<div className="load__block">
						<div className="load__title">Size</div>
						<div className="load__name js-file-size">640x480</div>
					</div>
					<div className="load__block">

						<label className="btn btn_border file">
							<input className="file__input js-file" type="file"
							       accept=".jpg, .jpeg, .png" onChange={props.loadImage}/>
							Load
						</label>

					</div>
					<div className="load__block">

						<button type="button" className="btn btn_border js-file-delete" onClick={props.deleteItem}>
							Delete
						</button>

					</div>
				</div>
			</li>
			<li className="load__item js-item">
				<div className="load__inner">
					<div className="load__block">
						<div className="load__title">Name</div>
						<ContentEditable className="load__name js-file-name"
						                 html={props.htmlInner} // innerHTML of the editable div
						                 disabled={false}       // use true to disable edition
						                 onChange={props.handleChange} // handle innerHTML change
						/>
					</div>
					<div className="load__block">
						<div className="load__title">Size</div>
						<div className="load__name js-file-size">640x480</div>
					</div>
					<div className="load__block">

						<label className="btn btn_border file">
							<input className="file__input js-file" type="file"
							       accept=".jpg, .jpeg, .png" onChange={props.loadImage}/>
							Load
						</label>

					</div>
					<div className="load__block">

						<button type="button" className="btn btn_border js-file-delete" onClick={props.deleteItem}>
							Delete
						</button>

					</div>
				</div>
			</li>
			{props.children}
		</ol>
		<button className="btn btn_border js-file-add-item" onClick={props.addChild}>
			<span className="icon icon_down" aria-hidden="true"/>
			<span className="btn__text">Add new item</span>
		</button>
	</div>
);

const ChildComponent = props => (
	<li className="load__item js-item">
		<div className="load__inner">
			<div className="load__block">
				<div className="load__title">Name</div>
				<ContentEditable className="load__name js-file-name"
				                 html={props.htmlInner} // innerHTML of the editable div
				                 disabled={false}       // use true to disable edition
				                 onChange={props.handleChange} // handle innerHTML change
				/>
			</div>
			<div className="load__block">
				<div className="load__title">Size</div>
				<div className="load__name js-file-size">640x480</div>
			</div>
			<div className="load__block">

				<label className="btn btn_border file">
					<input className="file__input js-file" type="file"
					       accept=".jpg, .jpeg, .png" onChange={props.loadImage}/>
					Load
				</label>

			</div>
			<div className="load__block">

				<button type="button" className="btn btn_border js-file-delete" onClick={props.deleteItem}>
					Delete
				</button>

			</div>
		</div>
	</li>
);

export default AppComponent;
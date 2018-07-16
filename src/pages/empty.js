import React from 'react';
import {dispatchAuthClick} from "../actions";

export default function Empty() {
	return (
		<div className="auth">
			<form className="auth__form" action="">
				<div className="auth__block">
					<label className="auth__label">
						<div className="auth__text">Name</div>
						<input type="text"/>
					</label>
				</div>
				<div className="auth__block">
					<label className="auth__label">
						<div className="auth__text">Password</div>
						<input type="password"/>
					</label>
				</div>
				<button onClick={dispatchAuthClick} type="submit" className="btn auth__enter">Enter</button>
			</form>
		</div>
	)
}
import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import App from "./containers/App";
import List from "./list";

const MainLayout = () => (

	<Router>
		<div className="wrapper">
			<div className="content">
				<header className="header">
					<div className="container">
						<div className="header__blocks">
							<div className="header__block">
								<div className="logo">
									<NavLink exact className="logo__link" to="/" title="Перейти на главную страницу">

									</NavLink>
								</div>
							</div>
							<div className="header__block header__block_wide">
								<div className="menu">
									<nav>
										<ul className="menu__list">
											<li className="menu__item">
												<NavLink exact className="menu__link" to="/">Statistics</NavLink>
												<NavLink className="menu__link" to="/list">List</NavLink>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="header__block">
								<button type="button" className="logout">
									<span className="icon icon_logout" aria-hidden="true"/>
									<span className="logout__text">Exit</span>
								</button>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container">
						<Switch>
							<Route exact path="/" component={App}/>
							<Route  path="/list" component={List}/>
						</Switch>
					</div>
				</main>
			</div>
		</div>
	</Router>
);

export default MainLayout;
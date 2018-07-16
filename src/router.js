import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Transactions from "./pages/transactions";
import Promo from "./pages/promo";
import Edit from "./pages/edit";
import Info from "./pages/info";
import NotFound from "./pages/notFound";
import List from "./pages/list";

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
										<img className="logo__pic" src="images/logo.svg"
										     alt="Перейти на главную страницу"/>
									</NavLink>
								</div>
							</div>
							<div className="header__block header__block_wide">
								<div className="menu">
									<nav>
										<ul className="menu__list">
											<li className="menu__item">
												<NavLink exact className="menu__link" to="/">Statistics</NavLink>
											</li>
											<li className="menu__item">
												<NavLink className="menu__link" to="/list">List of Webmasters</NavLink>
											</li>
											<li className="menu__item">
												<NavLink className="menu__link" to="/transactions">List of
													Transactions</NavLink>
											</li>
											<li className="menu__item">
												<NavLink className="menu__link" to="/promo">Load of promo</NavLink>
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
							<Route exact path="/" component={Home}/>
							<Route path="/list" component={List}/>
							<Route path="/transactions" component={Transactions}/>
							<Route path="/edit" component={Edit}/>
							<Route path="/info" component={Info}/>
							<Route path="/promo" component={Promo}/>
							<Route component={NotFound}/>
						</Switch>
					</div>
				</main>
			</div>
		</div>
	</Router>
);

export default MainLayout;
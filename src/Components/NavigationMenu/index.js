import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import './style.css';

const linkStyle = {
  textDecoration: 'none',
}

const Header = withRouter( props => {

	return (
			<nav className="navigation">
				<ul>
					<li>
						<NavLink activeClassName='is_active' to='/products' style={linkStyle}>
							PRODUCTS
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='is_active' to='/orders' style={linkStyle}>
							ORDERS
						</NavLink>
					</li>
				</ul>
			</nav>
	);
})

function mapStateToProps (state){ 
	return {productList: state.productList};
}

export default connect(mapStateToProps)(Header);
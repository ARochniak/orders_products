import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Products from './Products';
import Orders from './Orders';
import './style.css';

const routes = [
  { path: '/products', name: 'Products', Component: Products },
  { path: '/orders', name: 'Orders', Component: Orders },
];

export default withRouter( ({location}) => (
  <div className='container'>
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Component />
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </div>
));
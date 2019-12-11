import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import TopMenu from 'containers/TopMenu';
import NavigationMenu from 'containers/NavigationMenu';
import Products from 'containers/Products';
import Orders from 'containers/Orders';
import './index.css';

const routes = [
  { path: '/products', name: 'Products', Component: Products },
  { path: '/orders', name: 'Orders', Component: Orders }
];

const App = () => {
  return (
    <div className="App">
      <div className="TopMenu">
        <TopMenu />
      </div>
      <div className="NavigationMenu">
        <NavigationMenu />
      </div>
      <main>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
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
      </main>
    </div>
  );
};

export default withRouter(App);

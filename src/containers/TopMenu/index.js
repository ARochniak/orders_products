import React from 'react';
import Clock from 'components/Clock';
import DateDisplay from 'components/DateDisplay';
import SessionCounter from 'components/SessionCounter';
import './style.css';

const TopMenu = () => {
  // not going to show clock in development mode because of high CPU usage
  return (
    <header className="header">
      <SessionCounter />
      <DateDisplay />
      {process.env.NODE_ENV === 'development' ? (
        <div>Here will be clock in production build</div>
      ) : (
        <Clock />
      )}
    </header>
  );
};

export default TopMenu;

import React from 'react';
import TopMenu from './Components/TopMenu';
import NavigationMenu from './Components/NavigationMenu';
import Main from './Components/Main';
import './App.css';

export default () => {
  return (
    <div className="App">
      <div className="TopMenu">
        <TopMenu />
      </div>
      <div className="NavigationMenu">
        <NavigationMenu />
      </div>
      <main>
        <Main />
      </main> 
    </div>  
  );
}
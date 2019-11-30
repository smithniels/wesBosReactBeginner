import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  render() {
    return (
      <div className = "Catch-of-the-day">
        <div className = 'menu'>
          <header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;

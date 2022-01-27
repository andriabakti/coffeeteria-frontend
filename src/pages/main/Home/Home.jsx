import React, { Component } from 'react';
import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div className={`text-center text-white ${style.bg}`}>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
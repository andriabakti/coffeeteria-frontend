import React, { Component } from 'react';
import HistoryCard from './components/HistoryCard';
import style from './History.module.css'

class History extends Component {
  render() {
    return (
      <div className={style.bg}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12 py-5`}>
              <div className={`text-center text-white ${style.head}`}>
                <h2>Let's see what you have bought!</h2>
                <p>Select item to delete</p>
              </div>
              <div className={`${style.cards}`}>
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
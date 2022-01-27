import React, { Component } from 'react';
// components
import HistoryCard from './components/HistoryCard';
// react-redux
import { connect } from 'react-redux'
//  redux
import { getHistory } from '../../../redux/actions/history'
// style
import style from './history.module.css'

class History extends Component {
  componentDidMount() {
    this.props.getAllHistory()
  }

  render() {
    return (
      <div className={style.bg}>
        <div className={`container ${style.container}`}>
          <div className={`text-center text-white ${style.header}`}>
            <h2>Let's see what you have bought!</h2>
            <p>Select item to delete</p>
          </div>
          {this.props.error === true ? (
            <div className={`text-center text-white ${style.empty}`}>
              <h2>
                You have no history yet
              </h2>
            </div>
          ) : (
            <div className={`${style.section}`}> {
              this.props.history.map((item, index) => (
                <div className={`col-lg-4 ${style.card_item}`}>
                  <HistoryCard key={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history.history,
  error: state.history.isError
})

const mapDispatchToProps = (dispatch) => ({
  getAllHistory: () => dispatch(getHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(History);
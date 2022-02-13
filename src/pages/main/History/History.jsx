import React, { useEffect } from 'react'
// components
import CardHistory from '../../../components/CardHistory/CardHistory'
import Footer from '../../../components/Footer/Footer'
// react-helmet
import { Helmet } from 'react-helmet'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
//  redux
import { getHistory } from '../../../redux/actions/order'
// style
import style from './History.module.css'

const History = () => {
  const { history } = useSelector((state) => state.order)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [dispatch])

  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Purchase History - CoffeeTeria</title>
        <meta name='description' content='This is History Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <div className={`container ${style.content}`}>
          <div className={`text-center text-white ${style.header}`}>
            <h2>Let's see what you have bought!</h2>
            <p>Select item to delete</p>
          </div>
          {history.length <= 0 ? (
            <div className={`text-center text-white ${style.empty}`}>
              <h2>You have no history yet</h2>
            </div>
          ) : (
            <div className={`${style.section}`}>
              {history.map((item, index) => (
                <div key={index} className={`col-lg-4 ${style.card_item}`}>
                  <CardHistory
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default History

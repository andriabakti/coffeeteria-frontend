import React, { Component } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Cards from '../../../components/module/Cards/Cards'
// import axiosApiInstances from '../../../utils/axios';
import style from './Product.module.css'
import { connect } from 'react-redux'
import { getData } from '../../../redux/actions/product'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      menu: [],
      isLoading: false
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    this.props.getProduct()
    // .then((res) => {
    //   this.setState({
    //     menu: res.data.data,
    //     isLoading: false
    //   })
    // }).catch((err) => {
    //   console.log(err.message)
    // })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    // const { menu, isLoading } = this.state
    return (
      <Container fluid>
        <Row className={`text-center ${style.page}`}>
          <Col md='3' className={`${style.sidebar}`}>
            <div className='mb-auto'>
              <h4>Promo Today</h4>
              <p>
                Coupons will be updated every weeks.
                <br />
                Check them out!
              </p>
            </div>
            <div className={`${style.coupon}`}>
              <p>
                We are sorry,
                <br />
                the coupons are not available for now.
              </p>
            </div>
            <div className={style.terms}>
              <span>
                <b>Terms and Codition</b>
              </span>
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 get 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </div>
          </Col>
          <Col md='9'>
            <Container
              className={this.props.isLoading ? style.loading : style.menu}>
              {this.props.isLoading ? (
                <Spinner animation='border' variant='secondary' />
              ) : (
                this.props.products.map((item, index) => (
                  <Col md='3'>
                    <Cards
                      key={index}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      clickEvent={() => this.props.history.push(`/main/product/${item.id}`)}
                    />
                  </Col>
                ))
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.items.items,
  isLoading: state.items.isLoading
})
const mapDispatchToProps = (dispatch) => ({
  getProduct: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)

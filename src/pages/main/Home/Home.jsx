import React from 'react';
// react-helmet
import { Helmet } from 'react-helmet'
// components
import Footer from '../../../components/Footer/Footer';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';

// style
import style from './Home.module.css'

const Home = () => {
  // const toTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Home - CoffeeTeria</title>
        <meta name='description' content='Home Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <SectionOne />
        <SectionTwo />
        <Footer />
        {/* <button className="btn btn-dark" onClick={toTop}>Up</button> */}
      </div>
    </div>
  );
}

export default Home;
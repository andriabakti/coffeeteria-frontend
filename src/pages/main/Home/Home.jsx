import React from 'react';
// react-helmet
import { Helmet } from 'react-helmet'
// components
import Footer from '../../../components/module/Footer/Footer';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
// style
import style from './home.module.css'

const Home = () => {
  return (
    <div className={`col ${style.container}`}>
      <Helmet>
        <title>Home - CoffeeTeria</title>
        <meta name='description' content='Home Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
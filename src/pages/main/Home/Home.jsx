import React from 'react';
// modules: react-helmet
import Helmet from 'react-helmet'
// components: module
import { SectionUpper } from './SectionUpper/SectionUpper';
import { SectionLower } from './SectionLower/SectionLower';
// styles: module
import style from './Home.module.css'

export const Home = () => {

  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Home - CoffeeTeria</title>
        <meta name='description' content='Home Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <SectionUpper />
        <SectionLower />
      </div>
    </div>
  );
}
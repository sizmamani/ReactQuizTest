import React, { Component } from 'react';
import HeaderComponent from '../../../components/header/HeaderComponent';
import HomeComponent from '../components/HomeComponent';

import './home.scss';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent/>
        <HomeComponent />
      </div>
    );
  }
}

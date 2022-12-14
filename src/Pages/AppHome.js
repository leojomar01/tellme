import React from 'react';

import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppHomeContent from '../components/AppHomeContent/AppHomeContent';

class AppHome extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <AppHomeContent></AppHomeContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppHome;
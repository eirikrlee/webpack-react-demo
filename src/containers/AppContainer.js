import React, { PropTypes } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const App = ({children}) =>
  <div>
    <Header />
    {children}
    <Footer />
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;




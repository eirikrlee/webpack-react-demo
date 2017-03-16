import React, { PropTypes } from 'react';

const Header = () => <div>Header</div>;

const Footer = () => <div>Footer</div>;

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




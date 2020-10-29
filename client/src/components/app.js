import React from 'react';
import Footer from './footer';
import Main from './main/main';
import NavBar from './navbar';

const App = () => {
  return <div className='app'>
    <NavBar />
    <Main />
    <Footer />
  </div>
};

export default App;
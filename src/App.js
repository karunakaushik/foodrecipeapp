import React, { Component } from 'react';
import './App.css';
import Main from './components/index';
import Header from './components/header';
import Footer from './components/footer';
// import Main from './components';

class App extends Component{

  render()
  {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
}

export default App;

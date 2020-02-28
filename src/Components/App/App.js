import React from 'react';
import Header from '../Header/Header';
import Wrap from '../Wrap/Wrap';
import Info from '../Info/Info';
import Content from '../Content/Content';
import Footer from '../Footer/Footer'
import './sass/style.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Wrap/>
      <Info/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

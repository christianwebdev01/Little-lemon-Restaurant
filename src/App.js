import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  return (
    <>
   <Router>
      <Header />
      <Main />
   </Router>
      <Footer />
    </>
  );
}

export default App;

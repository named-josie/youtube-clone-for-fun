import React from 'react';
import './App.css';
import Sidebar from './components/common/Sidebar';
import Home from './components/pages/home'
import Header from './components/common/Header'
import Footer from './components/common/Footer';




function App() {
  return (
    <div className="App">
    
    <Header />
    <div className='main-page'>
    <Sidebar />
    <Home/>
    </div>
    <div className="wrapper">
    
    <main>
    
      </main>
  </div>
  <Footer />
  
  </div>
);
}

export default App;

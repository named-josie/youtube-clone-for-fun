import React from 'react';
import './App.css';
import Sidebar from './components/pages/Sidebar';
import Home from './components/pages/home'
import Header from './components/common/Header'
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
<Routes>
<Route path='/' /> 
<Route/>
</Routes>
    </Router>

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

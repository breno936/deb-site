import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact/index';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

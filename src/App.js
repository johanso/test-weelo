import { React } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// Assets
import './App.scss';
// Components
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Promotion from './components/promotion/Promotion';
import AppFeatures from './components/app-features/AppFeatures';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
import Chatbot from './components/chabot/Chatbot';


function App() {
  return (
    <Router>
      <Chatbot />
      <Header />
      <Banner />
      <Promotion />
      <AppFeatures />
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;

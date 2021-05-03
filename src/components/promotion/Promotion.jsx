import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import './Promotion.scss'
// Images
import gplay from '../../assets/images/google-play.png';
import appStore from '../../assets/images/app-store.png';

const Promotion = () => {
   return (
      <section className="promotion">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-md-10 col-lg-8 text-center text-white">
                  <h2 className="promotion__title">App is available for all devices</h2>
                  <p className="promotion__subtitle">App is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo.</p>
                  <div className="promotion__buttons">
                     <Link to="/"><img src={gplay} className="mx-2" alt="google play"/></Link>
                     <Link to="/"><img src={appStore} className="mx-2" alt="App Store"/></Link>
                  </div>
                  <span className="promotion__note d-block">* Available on iPhone, iPad and all Android devices</span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Promotion

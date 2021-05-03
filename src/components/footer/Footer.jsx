import React from 'react'
import { Link } from 'react-router-dom';
//Images
import logo from '../../assets/images/logo-white.svg';
import facebook from '../../assets/images/facebook.svg';
import youtube from '../../assets/images/youtube.svg';
import twitter from '../../assets/images/twitter.svg';
import tiktok from '../../assets/images/tiktok.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import gplay from '../../assets/images/google-play.png';
import appStore from '../../assets/images/app-store.png';
// Styles
import './Footer.scss'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">

            <div className="row justify-content-center">
               <div className="col-12 text-center">
                  <img className="footer__logo" src={logo} alt="logo" />
               </div>
               <div className="footer__social">
                  <Link to="/"><img src={facebook} className="mx-1" alt="facebook"/></Link>
                  <Link to="/"><img src={twitter} className="mx-1" alt="twitter"/></Link>
                  <Link to="/"><img src={linkedin} className="mx-1" alt="linkedin"/></Link>
                  <Link to="/"><img src={instagram} className="mx-1" alt="instagram"/></Link>
                  <Link to="/"><img src={tiktok} className="mx-1" alt="tiktok"/></Link>
                  <Link to="/"><img src={youtube} className="mx-1" alt="youtube"/></Link>
               </div>
            </div>

            <hr />

            <div className="footer__copyright">
               <div className="footer__copyright-links">
                  <Link to="/">Terms of use</Link>
                  <Link to="/">Privacy policy</Link>
               </div>
               <div className="text-white">
                  <small> © Copyrights 2021 Weelo | All rights reserved. </small>
               </div>
               <div className="footer__copyright-icons">
                  <Link to="/"><img src={gplay} className="mx-2" alt="google play"/></Link>
                  <Link to="/"><img src={appStore} className="mx-2" alt="App Store"/></Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer

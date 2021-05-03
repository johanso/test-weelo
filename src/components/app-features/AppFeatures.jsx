import React from 'react'
// Styles
import './AppFeatures.scss'
// Images
import phone from '../../assets/images/features_thumb.png';

const AppFeatures = () => {
   return (
      <section className="features">
         <div className="container">

            <div className="header-section">
               <h2 className="header-section__title">AWESOME <span>APP FEATURES</span></h2>
               <p className="header-section__subtitle">50+ DATA SIGNALS INCLUDED</p>
            </div>

            <div className="features__inner">
               <div className="row clearfix">
                  <div className="col-lg-4 col-md-6 col-xs-12">
                     <ul className="features__list left">
                        <li className="features__items">Criminal Record</li>
                        <li className="features__items">Past Address History</li>
                        <li className="features__items">Employment Sumary</li>
                        <li className="features__items">Nationwide Eviction Report</li>
                        <li className="features__items">Bank Assest Report</li>
                        <li className="features__items">Credit-Based Resident Score</li>
                        <li className="features__items">Sex Offender Search</li>
                     </ul>
                  </div>
                  <div className="features__image col-lg-4 col-md-6 col-xs-12">
                     <img className="img-fluid" src={phone} alt="Phone features" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-12">
                     <ul className="features__list right">
                        <li className="features__items">Credit Report</li>
                        <li className="features__items">OFAC / Patriot Act Search</li>
                        <li className="features__items">Bankruptcies</li>
                        <li className="features__items">Foreclousers</li>
                        <li className="features__items">Medical Collections</li>
                        <li className="features__items">Know Alieses</li>
                        <li className="features__items">And many more...</li>
                     </ul>
                  </div>
               </div>
            </div>

         </div>
      </section>
   )
}

export default AppFeatures

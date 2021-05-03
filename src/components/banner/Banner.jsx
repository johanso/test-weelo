import React from 'react'
import { Form, Button } from 'react-bootstrap';
//Styles
import './Banner.scss'
// Images
import phone from '../../assets/images/features_thumb.png';

function Banner() {
   return (
      <div className="banner">
         <div className="banner__shape"></div>
         <div className="container h-100">
            <div className="row align-items-center h-100">

               <div className="col-12 col-lg-5 col-md-6">
                  <div className="banner__intro">
                     <h1 className="banner__title">
                        <div>THE MOST EXTENSIVE </div>
                        <div><strong>TENANT REPORT</strong> </div>
                        <div>FOR JUST <span className="actual-price">$9.99</span> <span className="old-price">$30.00</span></div>
                     </h1>
                     <hr className="d-none d-md-block" />
                     <h3 className="banner__subtitle">Screen your tenant</h3>
                     <Form className="banner__form">
                        <Form.Group controlId="formBasicEmail">
                           <Form.Control type="text" placeholder="Tenant mobile" />
                           <Form.Control type="text" placeholder="Tenant name" />
                        </Form.Group>
                        <Button className="button button-feature" variant="none" type="button">
                           Screen Tenant
                        </Button>
                     </Form>
                  </div>
               </div>

               <div className="col-12 col-lg-5 col-md-6 offset-lg-2">
                  <div className="banner__thumb">
                     <img className="img-fluid" src={phone} alt="Phone features" />
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Banner

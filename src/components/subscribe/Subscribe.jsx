import React from 'react'
import { Form, Button } from 'react-bootstrap';
// Styles
import './Subscribe.scss'

const Subscribe = () => {
   return (
      <section className="subscribe">
         <div className="container">
            <div className="row justify-content-center">

               <div className="col-12 col-md-10 col-lg-7 text-center">

                  <div className="header-section">
                     <h2 className="header-section__title">SUBSCRIBE <span>TO GET UPDATES</span></h2>
                     <p className="header-section__subtitle">By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.</p>
                  </div>

                  <Form className="subscribe__form">
                     <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email" />
                     </Form.Group>
                     <Button className="button button-feature" variant="none" type="button">
                        Subscribe
                     </Button>
                  </Form>

               </div>
            </div>
         </div>
      </section>
   )
}

export default Subscribe

import React from 'react'
// Styles
import './Chatbot.scss'

const Chatbot = () => {
   return (
      <div className="float-chatbot">
         <div className="chatbot">
            <div className="chatbot__message">
               <div className="chatbot__dot"></div>
               <div className="chatbot__dot"></div>
               <div className="chatbot__dot"></div>
            </div>
            <div className="chatbot__corner"></div>
         </div>
      </div>
   )
}

export default Chatbot

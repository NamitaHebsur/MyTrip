import React from 'react';
import './Contact.css';

export default function ContactUs(){
    return(
        <div className="row">
           <h3>Hello! How can we help you?</h3> 
           <img className="img-cir" src="new-logo.jpg" alt="img"/> 
           <div className="about-section">
               <p>Name: MyTrip<br/>
               Contact No: +91-9999999999<br/>
               Address: MyTrip Pvt. Ltd.,
                   5th block, 32nd cross,
                   xyz Building, Bangalore. 
               </p>
           </div>
        </div>
    )
}

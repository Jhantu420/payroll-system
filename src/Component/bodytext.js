import React from 'react'
import "./bodytext.css";
import PayPal from "../Component/Paypal.png";
import Visa from "../Component/visa.png";
import Payoneer from "../Component/payoneer.png";

export default function bodytext() {
  return (
    <div className='bodytext'>
        <div className="upper">
            <h1>Simplify your <br/> team payments <br/>with Payrole</h1>
        </div>
        <div className="txt">
        <p>Our app allow mitigate error in the payrole process and <br/> reduce the hours spent calculating employee hours</p>
        </div>
        <div className="lower">
            <p>We are working with:</p>
        </div>
        <div className="img">
            <div className="img1">
            <img src={PayPal} alt="Paypal logo" />
            </div>
            <div className="img2">
            <img src={Visa} alt="VISA logo" />
            </div>
            <div className="img3">
            <img src={Payoneer} alt="Payoneer" />
            </div>
        </div>
      
    </div>
  )
}

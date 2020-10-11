import React from 'react';
import logo from '../../image/logo.jpg';
import instamojo from '../../image/instamojo.png';
import './second.css'

const  Second =(props)=>{
 


    return(
         <div>
            <div className="box-body">
              <div className="maincontainer">
                <div className="nav">
                  <div className="nav-1">
                    <div><img src={logo} /></div>
                    <p>paying to <br />Exposys Data Lab </p>
                  </div>
                </div>
                <div className="main-body">
                  <div className="input-1">
                    <div className="change">
                      <label>Purpose of Payment</label>
                      <span>Change</span>
                    </div>
                    <div className="instapay">
                      <p>Instapay</p>
                    </div>
                    <div className="amount">
                      <p>Amount</p>
            <span>₹</span>
                    </div>
                  </div>
                  <div className="your-details"> 
                    <hr />
                    <p>Your Details &nbsp; <span>〉 Payment</span></p>
                    <hr />
                  </div>
                  <div className="input-name">
                    <div className="inpute-page-2-name">
                      <label>Name</label>
                      <input type="text" oninvalid="alert('You must fill out the form!');" required />
                    </div>
                    <div className="inpute-page-2-email">
                      <label>Email</label>
                      <input type="text" oninvalid="alert('You must fill out the form!');" required />
                    </div>
                    <div className="inpute-page-2-phone">
                      <label>Phone Number</label>
                      <input type="text" oninvalid="alert('You must fill out the form!');" required />
                    </div>
                  </div>
                  <div className="amount-hr"><hr /></div>
                  <div className="amount">
                    <p>Amount</p>
            <span>₹</span>
                  </div>
                  <hr />
                  <div>
                    <button className="pay" type="submit" value>pay</button>
                  </div>
                </div>
                <div className="footer">
                </div>
              </div>
              <div className="footer-img">
                <p>Powered by &nbsp; </p> <img src={instamojo} alt="" height="20px" />
              </div>
            </div>
             
           </div>

    )

}




export default Second
import React, { Component } from 'react';
import logo from '../../image/logo.jpg';
import instamojo from '../../image/instamojo.png';


import './first.css'

class First extends Component{

  constructor(){
    super()
    this .state={
      Purpose:'',
      amount:''
    }
  }
  
  handleChangePurpose = (event)=>{
    this.setState({purpose:event.target.value})
  }
  handleChangeAmount = (event)=>{
    this.setState({amount:event.target.value})
  }



  onPayClick =()=>{
    var data={
      "purpose":this.state.purpose,
      "amount":this.state.amount
    }
  console.log(data)
   
  
      
        

  };
    render(){

 
    return(
        <div className="box-body">
        <div className="maincontainer">
          <div className="nav">
            <div className="nav-1">
              <div><img src={logo} alt="logo" /></div>
              <p>paying to <br />Exposys Data Lab </p>
            </div>
          </div>
          <div className="main-body">
            <div className="input-1">
              <label>Purpose of Payment</label>
              <input type="text" value={this.state.purposr} onChange={this.handleChangePurpose}/>
            </div>
            <div className="input-2">
              <label>Amount</label>
              <input type="text" value={this.state.amount} onChange={this.handleChangeAmount}/>
            </div>
            <div>
            
              <button className="pay" type="button" value="" onClick={this.onPayClick}>pay</button>
            
            </div>
          </div>
          <div className="footer">
          </div>
        </div>
        <div className="footer-img">
        <p>Powered by &nbsp; </p> <img src={instamojo}  height="20px" alt="" />
      </div>
      </div>

    )
}
}



export default First
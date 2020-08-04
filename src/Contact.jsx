import React, { useState } from 'react';

const Contact=()=>{

  const[data,setData]=useState({
    fullname:'',
    email:'',
    phone:'',
  });

 

  const inputEvent=(event)=>{
    const{name,value}=event.target;
    setData((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      }
    });
  };

  const formSubmit=(e)=>{
      e.preventDefault();
      alert(`Thankuu ${data.fullname}`);
  };

    return(
        <>
       <div className="my-5">
        <h1 className="text-center">Contact us</h1>
       </div>
       <div className="container-fluid contact_div">
       <div className="row">
            <div className="col-md-6 col-6 mx-auto">
            <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" value={data.email} onChange={inputEvent} type="email" class="form-control" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input name="fullname" value={data.fullname} onChange={inputEvent} type="text" class="form-control"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone no</label>
    <input name="phone" value={data.phone} onChange={inputEvent} type="number" class="form-control"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
       </div>

       </div>
        </>
    );
}
export default Contact;
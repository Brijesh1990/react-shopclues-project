function Contact()
{
    return (
      
        <>
            
         
<div className='container-fluid'>
  
  <div className='row'>

    <div className='col-md-10 mt-4 ml-5 shadow p-3'>
      
<h3>Merchant Support</h3>
      


<div className='row'>

<div className='col-md-5 mt-4 ml-5 shadow p-3'>
     
<button className="btn btn-block btn-info">Head Office</button>
<p>Clues Network Pvt. Ltd. <br/> Building No. 112, Sector- 44,<br/> Gurgaon, 122001, Haryana, India</p>


</div>


<div className='col-md-5 mt-4 ml-5 shadow p-3'>

<button className="btn btn-block btn-info">Raise a Query</button>
bazaar.shopclues.com/sellersupport (Expect a reply in 24-48 Hrs)
Call Us
9:30am - 6:30pm, Mon-Fri Technical Supp
    

</div>
</div>

    </div>
    
    </div>
  


</div>


{/* footer start here */}
<div className='container-fluid mt-5 shadow p-3 bg-info'>

  <div className='row'>
    <div className='col-md-2'>
      <ul className='navbar-footer'>
        <li><a href='' className='text-warning'><h5>About</h5></a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
      </ul>
    </div>
    <div className='col-md-2'>
      <ul className='navbar-footer'>
        <li><a href='' className='text-warning'><h5>Help</h5></a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
      </ul>
    </div>
    <div className='col-md-2'>
      <ul className='navbar-footer'>
        <li><a href='' className='text-warning'><h5>Policy</h5></a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
        <li><a href='' className='text-white'>Contact us</a></li>
      </ul>
    </div>


    <div className='col-md-3'>
<ul className='navbar-footer'>
<li><a href='' className='text-warning'><h5>Mail Us</h5></a></li>
<li><a href='' className='text-white'>
Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India
</a></li>   
</ul>
    </div>



    <div className='col-md-3'>
    <ul className='navbar-footer'>
<li><a href='' className='text-warning'><h5>Registered office address</h5></a></li>
<li><a href='' className='text-white'>
Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India
CIN : U51109KA2012PTC066107
Telephone: 1800 202 9898
</a></li>   
</ul>
</div>
</div>
<hr className='border border-2 border-white'/>

<p className='text-white ml-3'>Sell On Flipkart
Advertise
Gift Cards
Help Center
© 2007-2022 Flipkart.com</p>
</div>






{/* register Modal */}

<div className='modal fade' id='reg' role='dialog'>
  <div className='modal-dialog'>
    <div className='modal-content p-3'>
        {/* account form */}
     
     <h2 className='text-center text-white'>Register Form <button className='btn btn-sm btn-light float-right' data-dismiss="modal"><i className='bi bi-x-square'></i></button></h2>
     <hr className='border border-2 border-light w-50' />

      <div className='modal-body'>
       <form method='post'>
         
         <div className='row'>

       <div className='form-group col-5'>
           <input type="text" name="fname" placeholder='FirstName *' className='form-control'  />
         </div>

         <div className='form-group col-5'>
           <input type="text" name="lname" placeholder='LastName *' className='form-control' />
         </div>

         </div>

         <div className='form-group col-10'>
           <input type="email" name="email" placeholder='Email *' className='form-control' />
         </div>

         <div className='row'>

<div className='form-group col-5'>
    <input type="password" name="pass" placeholder='Password *' className='form-control'  />
  </div>

  <div className='form-group col-5'>
    <input type="password" name="cpass" placeholder='Confirm Password *' className='form-control' />
  </div>

  </div>

  <div className='form-group col-10'>
           <input type="date" name="dob" placeholder='DOB *' className='form-control' />
         </div>


         <div className='form-group col-10'>
           <input type="file" name="photo" placeholder='Photo *' className='form-control' />
         </div>


  <div className='row'>

<div className='form-group col-5'>
    <select  name="state" placeholder='state *' className='form-control'>
    <option value="">Select state</option>  
    <option value="">Gujrat</option>  
     </select> 
  </div>


  <div className='form-group col-5'>
    <select  name="state" placeholder='city *' className='form-control'>
    <option value="">Select City</option>  
    <option value="">Rajkot</option>  
     </select> 
  </div>

  </div>


  <div className='form-group col-10'>
           <textarea name="address" placeholder='Address *' className='form-control'></textarea>
         </div>


         <div className='form-group col-10'>
           <select name="multcity"   placeholder='Select Multiple city *' multiple max="4" className='form-control'>
             <option value="">-Select Multiple Locations</option>
             <option value="">Rajkot</option>  
             <option value="">Baroda</option>  
             <option value="">Surat</option>  
             <option value="">Ahemdabad</option>  
             <option value="">Surendra nagar</option>  
             
             </select>
         </div>

         <div className='form-group col-10'>
           <input type="submit" name="register" value="Register"  className='btn btn-info btn-lg ml-0' />
           <input type="reset" name="res" value="Reset"  className='btn btn-danger btn-lg ml-2' />
           
         </div>
         <div className='form-group col-10'>
        
           <b>Already have an Account ?<a href='' data-toggle="modal" data-target="#acc" data-dismiss="modal">Login Here</a></b>
         </div>
       </form>

       </div>


    </div>
  </div>

</div>




{/* account Modal */}

<div className='modal fade' id='acc' role='dialog'>
  <div className='modal-dialog w-100'>
    <div className='modal-content p-5'>
        {/* account form */}
     
     <h2 className='text-center text-white'>Login Form <button className='btn btn-sm btn-light float-right' data-dismiss="modal"><i className='bi bi-x-square'></i></button></h2>
     <hr className='border border-2 border-light w-50' />
     <div className='modal-body'>
       <form method='post'>
         <div className='form-group col-md-10 ml-5'>
           <input type="email" name="email" placeholder='Email *' className='form-control' />
         </div>

         <div className='form-group col-md-10 ml-5'>
           <input type="password" name="password" placeholder='Password *' className='form-control' />
         </div>

         <div className='form-group col-md-10 ml-5'>
           <input type="submit" name="log" value="Login"  className='btn btn-info btn-lg' />
           <b className='ml-3'><a href='' data-toggle="modal" data-target="#frg" data-dismiss="modal">Forget Password</a></b>
         </div>
         <div className='form-group col-md-10 ml-5'>
        
           <b>Dont have an Account ?<a href='' data-toggle="modal" data-target="#reg" data-dismiss="modal"> Create Account</a></b>
         </div>
       </form>
       </div>


    </div>
  </div>

</div>




{/* forget password Modal */}

<div className='modal fade' id='frg' role='dialog'>
  <div className='modal-dialog w-100'>
    <div className='modal-content p-5'>
        {/* account form */}
     
     <h2 className='text-center text-white'>Forget Password <button className='btn btn-sm btn-light float-right' data-dismiss="modal"><i className='bi bi-x-square'></i></button></h2>
     <hr className='border border-2 border-light w-50' />
     <div className='modal-body'>
       <form method='post'>
         <div className='form-group col-md-10 ml-5'>
           <input type="email" name="email" placeholder='Email *' className='form-control' />
         </div>


         <div className='form-group col-md-10 ml-5'>
           <input type="submit" name="submit" value="Submit"  className='btn btn-info btn-lg' />
   
         </div>
      
       </form>
</div>

    </div>
  </div>

</div>

        
        
        </>

    )
}

export default Contact
import React from 'react';
class Contact extends React.Component
{

  render()
  {
    return(
      
      <React.Fragment>

       

           {/*  header start here  */}
        <div className='container-fluid bg-info p-2'>
          {/* grid management */}
          {/* col-md-12, col-sm-12, col-lg-12 , col-xl-12  */}

          <div className='row'>
          
          <div className='col-md-2 text-white ml-4 mt-2'>Reliance Trends</div>

          <div className='col-md-5'>
            <div className='form-group'>
              <input type="text" name='search'  placeholder='Search here' className='form-control'></input>
            </div>
          </div>

          <div className='col-md-4 mt-2 text-white'>

        
          <b><a href='' data-toggle="modal" data-target="#acc" className='text-white'><i className='bi bi-person'></i> Account</a></b>
          <b className='ml-2'><i className='bi bi-cart'></i> Cart <span className='badge badge-lg badge-danger'>0</span> </b>  
          <b className='ml-5'>Like :<i className='bi bi-facebook p-2'></i>
          <i className='bi bi-twitter p-2'></i>
          <i className='bi bi-instagram p-2'></i></b>
           </div>

          </div>
         </div>
         
          {/* navbar start here */}

          <nav className='navbar navbar-expand-md shadow'>
            <button type='button' className='navbar-toggler' data-toggle="collapse" data-target="#btn-toggle">
              <i className='bi bi-list'></i>
            </button>
            <div className='collapse navbar-collapse' id='btn-toggle'>
            <ul className='navbar-link'>
             <li><a href=''>Home</a></li>
             <li className='dropdown'><a className='dropdown-toggle' data-toggle="dropdown" href=''>About</a> 
             <ul className='dropdown-menu'>
             <li><a href=''>Who we are</a></li>
             <li><a href=''>Know More</a></li>
             <li><a href=''>Site Map</a></li>
               
             </ul>
             </li>
             <li><a href=''>Mobile</a></li>
             <li><a href=''>Fashion</a></li>
             <li><a href=''>Grocery</a></li>
             <li><a href=''>Electronics</a></li>
             <li><a href=''>Appliences</a></li>
             <li><a href=''>Travel</a></li>
             <li><a href=''>Services</a></li>
             <li><a href=''>Portfolio</a></li>
             <li><a href=''>Feedback</a></li>
             <li><a href=''>Contact</a></li>
            </ul>
            </div>
          </nav>

        
 
   
{/* content here */}

<div className='container-fluid'>
    <h2 className='text-center'>Contact with us</h2>
<div className='row'>
<div className='col-md-4 mt-4 shadow p-3'>

<h3>Our Address</h3>
</div>


<div className='col-md-8 mt-4 shadow p-3'>

<h3>Contact Form</h3>
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



</React.Fragment>

    )
  }
  
}

export default Contact
function Home()
{
    return (
      
        <>
            
         
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/slider2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/slider1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/slider.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>

         
{/* content here */}

<div className='container-fluid'>
  
  <div className='row'>
    <div className='col-md-10 mt-4 shadow p-3'>
      <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info flipper' data-reverse="true" data-datetime="2022-01-01 00:00:00" data-template="ddd|HH|ii|ss" data-labels="Days|Hours|Minutes|Seconds" id="myFlipper"></b>
        



        
    <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
      <hr/>

      {/* products display grid */}
       <div className='row'>
       <div className='col-md-3'>
         <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Designer Bedshseet</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>

       <div className='col-md-3'>
         <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>sweet jambune</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>


       <div className='col-md-3'>
         <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Fresh Juice</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>


       <div className='col-md-3'>
         <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Designer Bedshseet</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>

       </div>
    </div>
    
    <div className='col-md-2 mt-4'>
      <img src='images/adv.webp' className='img-fluid w-100 img-thumbnail' style={{ height:'400px' }}/>
    </div>

    </div>
  

    <div className='container-fluid'>
  
    <div className='row'>
    <div className='col-md-12 mt-4 shadow p-3'>
      <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
      <hr/>

      {/* products display grid */}
       <div className='row'>

       <div className='col-md-3'>
         <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Designer Bedshseet</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>

       <div className='col-md-3'>
         <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>sweet jambune</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>


       <div className='col-md-3'>
         <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Fresh Juice</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>


       <div className='col-md-3'>
         <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
         <address className='text-center'>
           <p>Designer Bedshseet</p>
           <b className='text-success'>20-60% disscount</b>
           <p>Deals just for you</p>
         </address>
       </div>

       </div>
    </div>
  </div>
</div>

<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>




<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>



<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-12 mt-4 shadow p-3'>
    <h3>Deals of the Day <i className='bi bi-clock'></i> <b className='text-info'>27:00:13</b> <button  type='button' className='btn btn-sm btn-info float-right'>ViewAll</button></h3>
    <hr/>

    {/* products display grid */}
     <div className='row'>

     <div className='col-md-3'>
       <img src='images/bedsheet.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     <div className='col-md-3'>
       <img src='images/jambune.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>sweet jambune</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/juice.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Fresh Juice</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>


     <div className='col-md-3'>
       <img src='images/grooming.webp' className='img-fluid' style={{ width:'90%',height:'180px',marginLeft:'5%' }}/>
       <address className='text-center'>
         <p>Designer Bedshseet</p>
         <b className='text-success'>20-60% disscount</b>
         <p>Deals just for you</p>
       </address>
     </div>

     </div>
  </div>
</div>
</div>


<div className='container-fluid mt-5 shadow p-3'>
<h3>Our story & History</h3>
<hr className='border border-2 border-info'/>
<p>
<b>Flipkart: The One-stop Shopping Destination</b>
<br/>
E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.

What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.
</p>
<p>
<b>Flipkart Plus</b>
<br/>
A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!

What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
An annual Zomato Gold membership
An annual Hotstar Premium membership
6 months Gaana plus subscription
Rupees 550 instant discount on flights on ixigo
Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.
</p>
<p>
<b>No Cost EMI</b>
<br/>
In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>

<p>
<b>EMI on Debit Cards</b>
<br/>
Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
<p>
<b>Mobile Exchange Offers</b>
<br/>
Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>

<p>
<b>What Can You Buy From Flipkart?</b>
<br/>
Mobile Phones
From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services.</p>
<p>
<b>Electronic Devices and Accessories</b>
<br/>
When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.

Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.

Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.

How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.</p>

<p>
<b>Large Appliances</b>
<br/>
Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.</p>

<p>
<b>Small Home Appliances</b>
<br/>
Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.

<b>Lifestyle</b>
<br/>
Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.

Home and Furniture
Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.

You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at Flipkart.

Baby and Kids
Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in the business for your baby.

Books, Sports and Games
Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.

Grocery/Supermart
Launching into the grocery vertical, Flipkart introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
</p>
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

export default Home
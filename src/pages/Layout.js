
import {Outlet,Link} from 'react-router-dom';
// Outlet : the <Outlet> returns the current route is  selected 
//<Link>  : the<Link> elements is used to set URL and keep track of broswer history
// we used <Link> instead of <a href="">
function Layout()
{
    return (

        
        <>
        

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
             <li><Link to="/">Home</Link></li>
             <li className='dropdown'><Link to="/" className='dropdown-toggle' data-toggle="dropdown">About</Link> 
             <ul className='dropdown-menu'>
             <li><Link to="/">Who we are</Link></li>
             <li><Link to="/">Know More</Link></li>
             <li><Link to="/">Site Map</Link></li>
               
             </ul>
             </li>
             <li><Link to="/">Mobile</Link></li>
             <li><Link to="/">Fashion</Link></li>
             <li><Link to="/">Grocery</Link></li>
             <li><Link to="/">Electronics</Link></li>
             <li><Link to="/">Appliences</Link></li>
             <li><Link to="/">Travel</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/">Portfolio</Link></li>
             <li><Link to="/feedback">Feedback</Link></li>
             <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
          </nav>

        <Outlet />
        </>         
      
    )

}

export default Layout
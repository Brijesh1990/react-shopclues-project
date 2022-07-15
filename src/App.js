import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import  Services from './pages/Services';
import Contact from './pages/Contact';
import  NoPage from './pages/NoPage';

class App extends React.Component
{

  render()
  {
    return(
      
      <React.Fragment>

<BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>   

          <Route index  element={<Home />} />   
          <Route path="about" element={<About />} />   
          <Route path="feedback" element={<Feedback />} />   
          <Route path="services" element={<Services />} />   
          <Route path="contact" element={<Contact />} />   
          <Route path="*" element={<NoPage />} />


             </Route>
        
        </Routes>
        </BrowserRouter>



     </React.Fragment>

    )
  }
  
}

ReactDOM.render(<App/>,document.getElementById("app-demo"))

export default App
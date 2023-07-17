
import React from 'react';
import './App.css';
import MovieHots from './Components/MoviesHot';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MovieNewReleases from './Components/MoviesNewRel';
import {VscMenu} from 'react-icons/vsc';


function App() {
  return (
   
      <Router>
    <div><Navbar bg="dark" expand="lg" variant='dark'>
<Container fluid>
          <VscMenu className='menu' />
          <div className='navbar-logo-container'>
            <span className='navbar-logo-text'>Movie DB</span>
          </div>
        <Nav className='ms-auto'>
        <Navbar.Brand href="/new">New Releases</Navbar.Brand>
        <Navbar.Brand href="/hot">What's Hot</Navbar.Brand>
        </Nav>
        </Container>
</Navbar>
    <div>
    <Routes>
     <Route path="/" element={<MovieNewReleases/>}/>
     <Route path="/new" element={<MovieNewReleases/>}/>
     <Route path="/hot" element={<MovieHots/>}/>
    </Routes>
    </div>
    <div><Navbar expand="lg" className='navbar-footer'>
    <div className='navbar-footer-container'>
            <span className='navbar-footer-text'>upGrad Frontend Hackathon</span>
          </div>
    </Navbar>
    </div>
  </div>
</Router>
  
  );
}

export default App;

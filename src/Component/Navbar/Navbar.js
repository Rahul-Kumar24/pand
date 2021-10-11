import React from 'react'
import image from '../Avater/img1.png'
import logo1 from '../Avater/collection@2x.png'
import logo2 from '../Avater/idea@2x.png'
import logo3 from '../Avater/trending@2x.png'
import {useHistory, NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
          const history = useHistory()
          const onClick1 = ()=>{
                    history.push('/wall')
          }
          return (
                    // <div>
                    //           <div className="header">
                    //           <NavLink  to='/' >
                    //           <img src={img1} className="img_header" />  
                    //           </NavLink>
                    //           <NavLink to='/home'>
                    //           <img src={img2} className="img_header_collection"/>
                    //           <h7 className="header_home">Home</h7>
                    //           </NavLink>
                    //           <NavLink to='/des'>
                    //           <img src={img3} className="img_header_idea"/>
                    //           <h7 className="header_Deshboard">Deshboard</h7>
                    //           </NavLink>
                    //           <NavLink to='/abo'>
                    //           <img src={img4} className="img_header_trending"/>
                    //           <h7 className="header_about">About</h7>
                    //           </NavLink>
                    //           <button type="button" className='wallet' onClick={onClick1} >Connect Wallet</button>
                              
                              
                    // </div>
                    // </div>
                    <div>
          <nav className="navbar-border navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <NavLink exact activeClassName="active" to="/" className="nav-link navigation-item px-3"><a class="navbar-brand" href="#">
          {/* <img
          src={image}
          class="me-2"
          height="20"
          alt=""
          loading="lazy"
      /> */}
          <img src={image} className="img_header"  alt="imagenotfound"/>
          </a>
          </NavLink>
          </div>

          <div className="container-fluid">
          <form className="d-flex search input-group w-auto">
          </form>



          <div className="collapse navbar-collapse" id="navbarRightAlignExample">

          <ul className="navbar-nav  ms-auto me-5 mb-2 mb-lg-0">
          <NavLink exact activeClassName="active" to="/home" className="nav-link navigation-item px-3">
          <a className="navbar-brand">
                    <img style={{width:'0.7rem'}} src={logo1} alt="" />
                    </a >Home
                    <span className="sr-only">
                    </span>
          </NavLink>

          </ul>
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">

          <NavLink exact activeClassName="active" to="/das"   className="nav-link navigation-item px-3">
                    <a className="navbar-brand" >
                    <img style={{width:'0.7rem'}} src={logo2} alt="" />
                    </a>Dashboard
                    <span className="sr-only">
                    </span>
          </NavLink>

          </ul>
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">

          <NavLink exact activeClassName="active" to="/abo" className="nav-link navigation-item px-3">
                    <a className="navbar-brand" >
                    <img style={{width:'0.7rem'}} src={logo3} alt="" />
                    </a>About
                    <span className="sr-only">
                    </span>
          </NavLink>

          </ul>

          <button type="button" className='wallet' onClick={onClick1} >
                    Connect Wallet
          </button>
          </div>
</div>

</nav>
</div>
          )
}

export default Navbar

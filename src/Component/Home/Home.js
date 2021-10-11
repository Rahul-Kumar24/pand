import React from 'react'
import './Home.css'
// import img1 from '../Avater/img1.png'
// import img2 from '../Avater/collection@2x.png'
// import img3 from '../Avater/idea@2x.png'
// import img4 from '../Avater/trending@2x.png'
import info_1 from '../Avater/info_1@2x.png'
import bg from '../Avater/bg@2x.png'
import { useHistory } from 'react-router-dom'
// import react-icon
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar'
// import ad from '../../../public/avater/Group 5458@2x.png'
const Home = ()=> {
          return (
                    <div>
                              <Navbar/>
                    {/* <div className="header">
                              <img src={img1} className="img_header" />     
                              <img src={img2} className="img_header_collection"/>
                              <h7 className="header_home">Home</h7>
                              <img src={img3} className="img_header_idea"/>
                              <h7 className="header_Deshboard">Deshboard</h7>
                              <img src={img4} className="img_header_trending"/>
                              <h7 className="header_about">About</h7>
                              <button type="button" className='wallet'  >Connect Wallet</button>
                              
                              
                    </div> */}
                    <div className="body">
                              <div className="left_body">
                                        <h3 className="left_h3">The real-time finance protocol for real assets</h3>
                                        <p className="left_p">Bridge the gap between real-life assets and liquid assets with Pandora’s open finance protocol.</p>
                                        <button className="left_dash">Deshboard
                                                  {/* <button className="left_h6">Dashboard</button> */}
                                        </button>
                                        <div className="left_icon">
                                                  <h7 className="left_h7">Follow Us :
                                                  <AiFillTwitterSquare className="twitter_icon"/>
                                                  <BsLinkedin className="linkedin_icon"/>
                                                  <FaTelegram className="telegram_icon"/>
                                                  </h7>
                                        </div>
                              </div>
                              <div className="right_body">
                              <img src={bg} className="right_body_bg"/>
                              <img src={info_1} className="right_body_info"/>
                              
                              </div>
                    </div>
                    </div>
          )
}

export default Home

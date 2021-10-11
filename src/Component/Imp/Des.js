import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import withdraw from '../Avater/Group 5549.svg'
import details from '../Avater/Group 5552.svg'
import options from '../Avater/Group 5550.svg'
// import history from '../Avater/Group 5551.svg'
import image1 from '../Avater/banner.png'
import Navbar from '../Navbar/Navbar'
import './des.css'
import history1 from '../Avater/Group 5551.svg'
import data from '../Data/data.json'
import List from '../List/List'
const Des = () => {

          const [dash, setDash]=useState(false);
          const history = useHistory()
          const Stream = () =>{
                    history.push('/stre')
          }
          const check=false;
          const onClickDasboard = () =>{
                    setDash(true);
                    // if(check){
                    //           setDash(false);
                    // }
          }
          // check=true;
          return (
                    <div>
                              <Navbar/>
                    <div className=''>
                              <main  className="row d-flex align-items-center   header_container">
                              <div className="col-md-7 offset-md-1 ">
          
                              <img className='' src={image1} alt=""  />
                              </div>
                              <div className="col-md-3">
                              <div className="row d-flex  ">
                              <div className="col-md-5 m-2  offset-md-1 info-container">
                              <img className='ms-3' style={{height:'40px'}} src={withdraw} alt="" />
                              <p><b>Withdraw</b></p>
                              </div>
                    <div className="col-md-5 m-2  info-container">
                    <img className='ms-2' style={{height:'40px'}} src={details} alt="" />
                    <p><b>Details</b></p>
                    </div>
                    </div>
                    <div className="row d-flex ">
                    <div className="col-md-5 offset-md-1 m-2  info-container">
                    <img className='ms-2' style={{height:'40px'}} src={options} alt="" />
                    <p><b>Options</b></p>
                    </div>
                    <div className="col-md-5 info-container m-2 ">
                    <img className='ms-2' style={{height:'40px'}} src={history1} alt="" />
                    <p><b>History</b></p>
                    </div>
                    </div>
                    </div>
                    </main>

                    <div className="row d-flex align-items-center  ">
                    <div  className="col-md-8 offset-md-1">
                    <h6><b style={{cursor: 'pointer'}} onClick={onClickDasboard}>Dashboard</b></h6>
                    </div>
                    <div className="col-md-2">
                    <button className='button' onClick={Stream}>Stream</button>
                    </div>
                    </div>
                    
                    {/* <hr style={{marginLeft:"70px", marginTop:"0px", marginRight:"74px"}}/> */}





                    {dash&&<div className='header_container'>
                    <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    </table>
                    
                              {data.map((item)=>(
                                        <List item={item}/>
                              ))}

                    </div>}


          </div>
          </div>
          )
}

export default Des

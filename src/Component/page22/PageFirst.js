import React from 'react'
import './PageFirst.css'
const PageFirst = () => {
          return (
                    <div>
                              <div className="firstdiv">
                                        <div className="updiv">
                                        <h7 className="h7">
                                        Sablier Contract Interact
                                        </h7>
                                        <p className="text1">
                                        Please fill required fields for creating a streaming
                                        </p>
                                        </div>
                                        <div className="middiv">
                                                  <h7 className="text2">
                                                  Create Stream
                                                  </h7>
                                                  <div>
                                                  <label className="label1">
                                                  Recipient Address
                                                  </label>
                                                  <label className="label2">
                                                  Token Address
                                                  </label>
                                                  </div>
                                                  <div>
                                                  <input type="text" className="formControl" placeholder="hello">
                                                            {/*  */}
                                                  </input>
                                                  <span className="icon">0</span>
                                                  <input type="text" className="formControl1" placeholder="Enter Token Address"></input>
                                                  </div>
                                                  
                                                  <div className="mdiv">
                                                  <label className="label3">
                                                  Start Time
                                                  </label>
                                                  <label className="label4">
                                                  Stop Time
                                                  </label>
                                                  </div>
                                                  <div>
                                                  <input type="text" className="formControl2" placeholder="hello"></input>
                                                  
                                                  <input type="text" className="formControl3" placeholder="Enter Token Address"></input>
                                                  </div>
                                                  <div className="divl">
                                                  <label className="label5">
                                                  Stream ID
                                                  </label>
                                                  </div>
                                                  <div>
                                                  <input type="text" className="formControl5" placeholder="Enter Token Address"></input>
                                                  </div>
                                                  
                                        </div>
                                        
                              </div>
                    </div>
          )
}

export default PageFirst

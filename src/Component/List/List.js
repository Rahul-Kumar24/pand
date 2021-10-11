import React from 'react'
import './List.css'
import {useHistory} from 'react-router-dom'
const List = (props) => {
          const data = props.item;
          const history = useHistory();

          const onClickHanlder = () =>{
                    history.push('/stre')
          }

          return (
                    <div >
                              <div className="header-list">
                                        <div className="button1">{data.status}</div>
                                        <td className="to">{data.to}</td>
                                        <td className="value">{data.value}</td>
                                        <td className="valuec">{data.vlauetype}</td>
                                        
                                        <progress className="progress1" value={data.progress} max="100"> {data.progress} </progress>
                                        <td className="sdate">{data.date}</td>
                                        <td className="edate">{data.sdate}</td>
                                        <button className="buttonLink" onClick={onClickHanlder}>Link</button>
                              </div>
                    </div>
          )
}

export default List

import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
  var  [viewlist,setviewlist]=useState([])

     
  axios.get("http://localhost:4000/api/views").then(
      (response)=>{
  
          console.log(response.data)
          setviewlist(response.data.data) 
          
      })

      const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:4000/api/eventdelete",data).then((response)=>
       {
           if(response.data.status=="success")
           {
               alert("success")
           }
           else
           {
               alert("error")
           }
       })
      
   }
  return (
    <div>
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">  NAME</th>
      <th scope="col">DATE</th>
      <th scope="col">VENUE</th>
      <th scope="col">ORGANISER</th>
      <th  scope="col">CONTACT NUM</th>
    </tr>
  </thead>
  <tbody>
    
        {viewlist.map((value,key)=>{
           return <tr>
                <td>{value.name}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td>
      <td>{value.contact}</td>
      <td>  <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button> </td>
      </tr>
        })}
     
     
   
   
    
  </tbody>
</table>



</div>
</div>
</div></div></div>
    </div>
  )
}

export default View
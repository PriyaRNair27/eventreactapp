import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const [data,setdata]=useState([{"name":"","venue":"","organiser":"","contact":""}])
    var [date,setdate]=useState("")
    const subdata=()=>{
        const  data={"date":date}
        console.log(data)
        axios.post("http://localhost:4000/api/eventsearch",data).then((response)=>{
            
            setdata(response.data.data)

        })

        
    }


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
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">DATE</label>
                    <input onChange={(c)=>{setdate(c.target.value)}} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SEARCH</button>
                </div>
                
            </div>
            {data.map((value,key)=>{
                return<div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   NAME:
                   <input type="text" value={value.name} className="form-control"/></div>
                   
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   VENUE:
                   <input type="text" value={value.venue} className="form-control"/></div>

                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   ORGANISER:
                   <input type="text" value={value.organiser} className="form-control"/></div>

                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   CONTACT:
                   <input type="text" value={value.contact} className="form-control"/></div>
                  
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

                </div>
                





                    </div>

            })}
        </div>
    </div>
</div>


    </div>
  )
}

export default Search
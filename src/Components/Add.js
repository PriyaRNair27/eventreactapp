import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    var [name,setname]=useState("")
    var [date,setdate]=useState("")
    var [venue,setvenue]=useState("")
    var [organiser,setorganiser]=useState("")
    var [contact,setcontact]=useState("")
    const subdata=()=>{
        const data={"name":name,"date":date,"venue":venue,"organiser":organiser,"contact":contact}
        console.log(data)
        axios.post("http://localhost:4000/api/eventmanage",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("successfully inserted")

                }
                else
                {
                alert("failed")
                }
            }
        )
    }
    return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <dv className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">NAME</label>
                    <input onChange={(c)=>{setname(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">DATE</label>
                    <input onChange={(c)=>{setdate(c.target.value)}} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">VENUE</label>
                    <input onChange={(c)=>{setvenue(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ORGANISER</label>
                    <input onChange={(c)=>{setorganiser(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">CONTACT NUM</label>
                    <input onChange={(c)=>{setcontact(c.target.value)}} type="text" className="form-control"/>
                    

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>
    </div>
  )
}

export default Add
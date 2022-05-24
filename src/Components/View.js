import React from 'react'
import Header from './Header'

const View = () => {
    var viewlist=[
        { 
            "name":"marriage",
            "date":"22-10-2022",
            "venue":"townhall",
            "organiser":"thomason",
            "contact":"8089362908"

        },
    
            { 
                "name":"birthday",
                "date":"22-5-2022",
                "venue":"home",
                "organiser":"thomason",
                "contact":"8089362908"
    
            },
            
                { 
                    "name":"wedding aniversary",
                    "date":"25-6-2022",
                    "venue":"townhall",
                    "organiser":"thomason",
                    "contact":"8089362908"
        
                }
                
            
       
    ]
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
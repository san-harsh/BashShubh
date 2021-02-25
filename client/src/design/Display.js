import React from 'react'
import './Display.css'

const Display =({display,textFormat})=>{

    return(
        <div className="card card-content">
        <div  className="imgNP text-center">
        <img className="imgResponsive" 
        src ={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.NPColor}`}
        alt ='img - NamePlate'/>
        
        </div>
        <div className="imgText Text-center">
       
               <p style ={{fontSize : textFormat , color: display.NPTextColor}}>{display.NPText}</p>
            </div>
        
        </div>
       

      
    )



}

export default Display
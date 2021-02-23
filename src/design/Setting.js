import React from 'react'

const ImgUrl ='https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'


const Setting =({color , text , textSize , textColor})=>{

    return(
        <div className="card bg-light container">
            <h3 className="Text-center">Personalize</h3>
            <hr/>
    {/*Material Type*/}
            <h5>Material Type</h5>
            <div className="MaterialType">
            <buttonGroup aria-label="Basic example">   
            <button className="btn btn-info btn-sm mb-2">Aluminium</button>
            <button className="btn btn-info btn-sm mb-2">Plastic</button>
            <button className="btn btn-info btn-sm mb-2">Steel</button>
            </buttonGroup>
            </div>
            <hr/>

       {/*Material Shape*/}
                <h5>Material Shape</h5>
                <div className="MaterialType">
                <buttonGroup aria-label="Basic example">   
                <button className="btn btn-info btn-sm mb-2">Circle</button>
                <button className="btn btn-info btn-sm mb-2">Rectangular</button>
                <button className="btn btn-info btn-sm mb-2">Square</button>
                </buttonGroup>
                </div>
                <hr/>
          {/*Material Dimension*/}
          
                <h5>Material Dimensions</h5>
                <label type="text">Length :</label>
                <input type ="number" className="form-control form-control-sm-mb-2" /> 
    
                <label type="text">Height :</label>
                <input type ="number" className="form-control form-control-sm-mb2" /> 
                <hr/>

             
  
     
        
            
            <h5 >Change Color</h5>
                <div className="NP-Color">
                  <img   onClick={color}  src={`${ImgUrl}black.png`}  alt="black"  id="black"/>
                  <img onClick={color} src={`${ImgUrl}white.png`}     alt="white" id="white"/>
                  <img onClick={color} src={`${ImgUrl}red.png`}       alt="red"   id="red"/>
                  <img onClick={color} src={`${ImgUrl}grey.png`}      alt="grey"  id="grey"/>
                  <img onClick={color}src={`${ImgUrl}blue.png`}       alt="blue"   id="blue"/>
                
                </div>
                <hr/>


                <h5>Enter Text for NamePlate</h5>
                <input type="text" className="form-control form-control-sm-mb-2" onChange={text}/>
                <hr/>


                <h5>Text Size</h5>
                <input type ="range" min="12" max="60" onChange={textSize}/>
                <hr/>


                <h5>Text Color</h5>
                <select onChange={textColor} className="form-control form-control-sm-mb-2">
                <option>White</option>
                <option>Blue</option>
                <option>black</option>
                <option>Red</option>
                </select>
                <hr/>

                {/*Material Cost */}

                <label type="text">Material Cost :</label>
                <input type ="number" className="form-control form-control-sm-mb-2" /> 
    
                <label type="text">Setup Cost :</label>
                <input type ="number" className="form-control form-control-sm-mb2" /> 
         
                <label type="text">Job Cost :</label>
                <input type ="number" className="form-control form-control-sm-mb-2" /> 

                <hr/>
                <label type="text">Total Cost :</label>
                <input type ="number" className="form-control form-control-sm-mb2" /> 
                <hr/>
                
                


                <button className="btn btn-primary btn-sm mb-2">Submit</button>
        </div>

  
    )



}

export default Setting;
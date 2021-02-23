import React,{Component} from 'react';
import Display from '../design/Display'
import Setting from '../design/Setting'


class Product extends Component{
 
    state = {
      NPColor : 'black',
      NPText : '',
      NPTextSize : 40,
      NPTextColor :'#758283'
    }

    handleColorChange =(e)=>{
     this.setState({NPColor: e.target.id})
    }
    
    handleOnChange =(e)=>{
      this.setState({NPText : e.target.value})
    }

    handleTextSize=(e)=>{
      this.setState({NPTextSize : e.target.value})
    }

    handleTextColor =(e)=>{
      this.setState({NPTextColor : e.target.value})
    }

    formatText(){
      const size = this.state.NPTextSize;
      return parseInt(size);
    }

  render(){
    return(
         <div className="container py-5">
           <div className ="row">
             <div className="col-lg-8">
             <Display 
             display ={this.state}
             textFormat={this.formatText()}/>
             </div>

             <div className="col-lg-4">
             <Setting 
               color ={this.handleColorChange}
               text = {this.handleOnChange}
               textSize ={this.handleTextSize}
               textColor ={this.handleTextColor}
            />
             </div>
           </div>
          
        
         </div>

    )
  }
}

export default Product
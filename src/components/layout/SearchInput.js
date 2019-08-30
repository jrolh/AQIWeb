import React from "react";
import Aqi from '../map/Aqi'    

class SearchInput extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
          citySearch : ''
        }
        
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        
        updateInput(event){
        this.setState({citySearch : event.target.value})
        }
        
        
        handleSubmit = (e) => {

            if (e.key === 'Enter') {
              console.log('Your input value is: ' + this.state.citySearch)
              }
        
        //Send state to the server code
        }
        
    
  
    render() {
      return (
      
      <div>
      <input type="text" placeholder="Enter a city" class="form-control form-control-underlined" onChange={this.updateInput} onKeyDown={this.handleSubmit} ></input>
      <Aqi citySearch={this.state.citySearch}/>
      </div>
      
      
      )
    }
  }
export default SearchInput

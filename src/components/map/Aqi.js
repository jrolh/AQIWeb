import React, { Component } from "react";
import SearchInput from '../layout/SearchInput'

class Aqi extends Component {
  state = {
    aqiCity: [],
    aqiValue: [],
    cityList: [
      "beijing",
      "shanghai",
      "chengdu",
      "toronto",
      "boston",
      "new york",
      "tokyo",
      "hong kong",
      "seoul"
    ]
  };

  componentDidMount() {
    var i = 0;
    var api_url =
      "https://api.waqi.info/feed/" +
      this.state.cityList[i] +
      "/?token=";

    for (i = 0; i < this.state.cityList.length; i++) {
      api_url =
        "https://api.waqi.info/feed/" +
        this.state.cityList[i] +
        "/?token=";
      fetch(api_url)
        .then(res => res.json())
        .then(data => {
          var joined_city = this.state.aqiCity.concat(data.data.city.name);
          var joined_aqi = this.state.aqiValue.concat(data.data.aqi);
          this.setState({ aqiCity: joined_city });
          this.setState({ aqiValue: joined_aqi });
        })
        .catch(console.log);
    }
  }

  render() {
    var colourQuality = 'green';
    
    return (
      <div class="container" >
        <div class="row" >
          {this.state.aqiCity.map((item, i) => {
            if (this.state.aqiValue[i] < 100) {
              colourQuality = 'green';
            }
            else if (this.state.aqiValue[i] > 100 && this.state.aqiValue[i] < 150) {
              colourQuality = 'orange';
            }
            else if (this.state.aqiValue[i] > 150){
              colourQuality = 'red'
            }
            return (
              <div key={i} >
                <div class="col-sm" >
                  <div class="card" >
                    <div class="card-body" style={{color:colourQuality}}>
                      <h5 class="card-title">{this.state.aqiCity[i]}</h5>
                      <p class="card-text">
                        Current AQI: {this.state.aqiValue[i]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Aqi;



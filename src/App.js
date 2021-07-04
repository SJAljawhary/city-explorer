import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor (props){
      super(props);
      this.state={
        cityName : '',
        cityData : {}
      }
  }

  setLocation = async (event) => {

    event.preventDefault ();

    this.setState({
      cityName : event.target.city.value

    })
  
    let url = `https://us1.locationiq.com/v1/search.php?key=pk.b848c1ee9a6d10f565222020b02495f1&city=${this.state.cityName}&format=json`

     let recievedData = await axios.get(url);

     this.setState({
       cityData : recievedData.data[0]
     })
     console.log(recievedData);
     console.log(recievedData.data[0]);
  }

  render() {
    return (
      <div>

        <h1>City Explorer</h1>
        <form onSubmit={this.setLocation}>

          <input type='text' placeholder='city name' name='city'/>
          <input type='submit' value='Explore!'/>
        
          <p>City Name : {this.state.cityData.display_name}</p>
          <p>Lattitude : {this.state.cityData.lat}</p>
          <p>Longitude : {this.state.cityData.lon}</p>
          
        </form>
      </div>

    )
  }



}

export default App;
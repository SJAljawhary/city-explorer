import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {

  constructor (props){
      super(props);
      this.state={
        cityName : '',
        cityData : {},
        cityMap : false
      }
  }

  setLocation = async (event) => {

    event.preventDefault ();

    this.setState({
      cityName : event.target.city.value

    })
  
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&city=${this.state.cityName}&format=json`

     let recievedData = await axios.get(url);

     this.setState({
       cityData : recievedData.data[0],
       cityMap : true 
     })
     console.log(recievedData);
     console.log(recievedData.data[0]);
  }

  render() {
    return (
      <div>

        <h1 className='header'>City Explorer</h1>
        <form onSubmit={this.setLocation} className='cityInfo'>

          <input className='cityName' type='text' placeholder='city name' name='city'/><br></br>
          <input className='button' type='submit' value='Explore!'/>
      
        </form>

          <div className='information'>

          <p>City Name : {this.state.cityData.display_name}</p>
          <p>Lattitude : {this.state.cityData.lat}</p>
          <p>Longitude : {this.state.cityData.lon}</p>

          </div>



          {
            this.state.cityMap && 

        <img className='map' alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} />

          }


      </div>

    )
  }



}

export default App;
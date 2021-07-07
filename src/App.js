import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import Weather from './components/Weather'
import Movies from './components/Movies';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      CityName: '',
      cityData: {},
      cityMap: false,
      errorMessage: false,
      weatherInfo: [],
      errorWeather: false,
      movieInfo: [],
      errorMovie: false,
      errorWeather: false,
      imgSrc: '',


    }
  }

  setLocation = async (event) => {

    event.preventDefault();

    await this.setState({
      CityName: event.target.city.value

    })

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&city=${this.state.CityName}&format=json`;


    try {
      let recievedData = await axios.get(url);

      console.log(recievedData);
      console.log(recievedData.data[0]);

      this.setState({
        cityData: recievedData.data[0],
        imgSrc : `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${recievedData.data[0].lat},${recievedData.data[0].lon}&zoom=12`,
        cityMap: true
        
      })
      

      this.getWeather();

      this.getMovie();


    } catch {
      this.setState({
        errorMessage: true
      })

    }


  }
  

  getWeather = async () => {
    let url = `${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.CityName.charAt(0).toUpperCase() + this.state.CityName.slice(1)}`

    try {
      let weatherData = await axios.get(url);
      this.setState({
        weatherInfo: weatherData.data,
        errorWeather: true

      })
    } catch {
      this.setState({
        errorMessage: true
      })
    }
  }

  getMovie = async () => {
    let url = `${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.CityName.charAt(0).toUpperCase() + this.state.CityName.slice(1)}`

    try {
      let movieData = await axios.get(url);
      this.setState({
        movieInfo: movieData.data,
        errorMovie: true

      })
    } catch {
      this.setState({
        errorMessage: true
      })
    }
  }

  render() {
    return (
      <div>

        <h1 className='header'>City Explorer</h1>
        <form onSubmit={this.setLocation} className='cityInfo'>

          <input className='cityName' type='text' placeholder='city name' name='city' /><br></br>
          <input className='button' type='submit' value='Explore!' />

        </form>

        <div className='information'>
          {
            this.state.cityMap &&
            <Map
              displayName={this.state.cityData.display_name}
              longitude={this.state.cityData.lon}
              latitude={this.state.cityData.lat}
              imgURL={this.state.imgSrc}
            />

          }
        </div>

        {this.state.errorMessage &&
          <p>something went wrong in getting data from locationiq ! </p>
        }

        <div className='information1'>
        {this.state.errorWeather &&
          <Weather
            weatherInformation = {this.state.weatherInfo}
          />
        }
        </div>

        <div className='information2'>
          {this.state.errorMovie &&
          <Movies
          movieInformation = {this.state.movieInfo}
          />
        }
        </div>

      </div>
    )
  }
}
export default App;


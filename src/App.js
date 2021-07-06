import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      cityMap: false,
      errorMessage: false,
      weatherInfo: [],
      errorWeather: false,
      movieInfo: [],
      errorMovie: false,
      errorWeather: false


    }
  }



  setLocation = async (event) => {

    event.preventDefault();

    await this.setState({
      cityName: event.target.city.value

    })

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&city=${this.state.cityName}&format=json`;


    try {
      let recievedData = await axios.get(url);

      console.log(recievedData);
      console.log(recievedData.data[0]);

      this.setState({
        cityData: recievedData.data[0],
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
    let url = `${process.env.REACT_APP_SERVER}/getWeatherInfo?cityName=${this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1)}`

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
    let url = `${process.env.REACT_APP_SERVER}/getMovieInfo?cityName=${this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1)}`

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

          <p>City Name : {this.state.cityData.display_name}</p>
          <p>Lattitude : {this.state.cityData.lat}</p>
          <p>Longitude : {this.state.cityData.lon}</p>

        </div>

        {
          this.state.cityMap &&

          <img className='map' alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} />

        }

        {this.state.errorMessage &&
          <p>something went wrong in getting data from locationiq ! </p>
        }

        {this.state.weatherInfo.map((value, index) => (

          <ul className="list" key={index}>
            <li>
              {value.date}
            </li>
            <li>
              {value.description}
            </li>
          </ul>

        ))}

        {this.state.movieInfo.map((value, index) => (

          <ul className="list" key={index}>
            <li>
             tilte : {value.title}
            </li>
            <li>
             overview : {value.overview}
            </li>
            <li>
            average : {value.average_votes}
            </li>
            <li>
             total votes : {value.total_votes}
            </li>
            <li>
             image : <img src = {value.image_url}/>
            </li>
            <li>
             popularity : {value.popularity}
            </li>
            <li>
             released on : {value.released_on}
            </li>
          </ul>

        ))}


  }


  getWeather = async () => {
    let url = `${process.env.REACT_APP_SERVER}/getWeatherInfo?cityName=${this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1)}`

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

  render() {
    return (
      <div>

        <h1 className='header'>City Explorer</h1>
        <form onSubmit={this.setLocation} className='cityInfo'>

          <input className='cityName' type='text' placeholder='city name' name='city' /><br></br>
          <input className='button' type='submit' value='Explore!' />

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

        {this.state.errorMessage &&
          <p>something went wrong in getting data from locationiq ! </p>
        }

        {this.state.weatherInfo.map((value, index) => (
        
          <ul key={index}> 
          <li>
          {value.date} 
          </li>
          <li>
          {value.description}
          </li>
        </ul>

          ))}



      </div>

    )

  }
}
export default App;

        }}
    export default App;


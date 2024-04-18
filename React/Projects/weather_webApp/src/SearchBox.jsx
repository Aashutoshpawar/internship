import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';


 export default function SearchBox() {
     let [city,setCity] = useState("");
     
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "562c60eff7da6e5f93d2eec926063451";

    let getWeatherInfo = async() =>{
       let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}$units=metric`
        );
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result = {
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.temp.humidity,
        feelsLike : jsonResponse.main.temp.feelsLike,
        weather : jsonResponse.weather[0].description
       };
       console.log(result);
    }
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };
  return (
    <div>
      <h3>Search for the weather</h3>
      <form action="" onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required/>
      <br /><br />
      <Button variant="contained" type='submit'>check</Button>
      </form>
    </div>
  )
}


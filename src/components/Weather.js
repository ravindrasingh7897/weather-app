import axios from 'axios';
import React, { useState } from 'react';
import '../App.js';
import './css/weather.css'
import searchimage from "./images/search.png"
import cloudimage from "./images/cloud.png"
import Home from './Home';




function Weather() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'London',
        humidity: 10,
        speed: 2,
        image: ''
    })

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=04ca7a1dd2eb8f198db23193435305a2&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    let imagePath = '';
                    if (res.data.weather[0].main === "Clouds") { //Clear, Rain, Drizzle, Mist
                        imagePath = ""
                    } else if (res.data.weather[0].main === "Clouds") {
                        imagePath = ""
                    }
                    console.log(res.data);
                    setData({
                        ...data, //...data used to spread the existing state data into a new object 
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed,
                        image: imagePath
                    })
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        setError("Invalid city name")
                    } else {
                        setError('');
                    }
                    console.log(err)
                });
        }
    }
    return (
        <div className='main'>
            <div className="container" >
                <div className="weather">
                    <div className="search">
                        <input type="text" placeholder='Enter city name' onChange={e => setName(e.target.value)} />
                        <button onClick={handleClick}><img src={searchimage} alt="hi " /></button>
                        {/* <button onClick={handleClick}>ok</button> */}
                    </div>
                    <div className="winfo">
                        <img src= {cloudimage} alt="cloud" className='icon' />
                        <h1>{Math.round(data.celcius)}°c</h1>
                        <h2>{data.name}</h2>
                        <div className="details">
                            <div className='col'>
                                <img src="" alt="" />
                                <div className='humidity'>
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>

                        <h1>speed {Math.round(data.speed)}</h1>
                        <img src={data.image} alt="" />
                        <h1>{error}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather

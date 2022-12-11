import axios from 'axios';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/app.css';
import DisplayWeather from './display';

function App(){
    const [search,setSearch] = useState('');
    const [info,setInfo] = useState({
        locationName:"",
        currentTemp:0,
        code:0,
        forecast:[
            {date:"",dayTemp:0,code:0},
            {date:"",dayTemp:0,code:0},
            {date:"",dayTemp:0,code:0},
            {date:"",dayTemp:0,code:0},
            {date:"",dayTemp:0,code:0},
            {date:"",dayTemp:0,code:0}
        ]
    });
    async function  searchCity(){
        await axios.get("http://api.weatherapi.com/v1/forecast.json",{
                params:{
                    key:"",
                    q: search,
                    days:7
                }
            }).then((value)=>{
                setInfo(
                    {
                        locationName: value.data.location.name,
                        currentTemp: Math.ceil( Number( value.data.current.temp_c)),
                        code: Number(value.data.current.condition.code),
                        forecast:
                        [
                            {date:value.data.forecast.forecastday[0].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[0].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[0].day.condition.code)},
                            {date:value.data.forecast.forecastday[1].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[1].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[1].day.condition.code)},
                            {date:value.data.forecast.forecastday[2].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[2].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[2].day.condition.code)},
                            {date:value.data.forecast.forecastday[3].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[3].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[3].day.condition.code)},
                            {date:value.data.forecast.forecastday[4].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[4].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[4].day.condition.code)},
                            {date:value.data.forecast.forecastday[5].date,dayTemp: Math.ceil( Number( value.data.forecast.forecastday[5].day.avgtemp_c)),code: Number(value.data.forecast.forecastday[5].day.condition.code)}
                        ]
                    }
                )
            });
    }
    function displayWeather(){
        return <DisplayWeather info={info} />
    }
    return(
        <>
            <div id="header" className ="container-fluid">
                <div className="row">
                    <div className="col-sm-6 logo"><h2>WebloWeather</h2></div>
                    <div className="col-sm-6 search"><input type="text" name="searchBar" id="searchBar" onKeyDown={(e)=>{
                        if(e.code === "Enter"){
                            searchCity();
                        }
                    }} placeholder="Search a City" onChange={(e)=>{
                        setSearch(e.target.value);
                    }}/>
                    <button id="searchBtn" onClick={searchCity}>Search</button>
                    </div>
                </div>
            </div>
            <div>{displayWeather()}</div>
            
        </>
    );
}
export default App;
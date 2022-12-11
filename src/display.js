import onek from "../src/Assets/weatherIcon/1000.png";
import onekandthree from "../src/Assets/weatherIcon/1003.png";
import onekandsix from "../src/Assets/weatherIcon/1006.png";
import onekandnine from "../src/Assets/weatherIcon/1009.png";
import onekandsixtythree from "../src/Assets/weatherIcon/1063.png";
import onekandseventytwo from "../src/Assets/weatherIcon/1072.png";
import onekandeightyseven from "../src/Assets/weatherIcon/1087.png";
import onekandhundrendfourteen from "../src/Assets/weatherIcon/1114.png";
import onekandhundrendthirtyfive from "../src/Assets/weatherIcon/1135.png";
import onekandhundrendfiftythree from "../src/Assets/weatherIcon/1153.png";
import onekandhundrendsevwntyone from "../src/Assets/weatherIcon/1171.png";
import onekandhundrendeightythree from "../src/Assets/weatherIcon/1183.png";
import nothingPic from "../src/Assets/weatherIcon/Asset 16.png";

function DisplayWeather(props){
    function getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }
    let internetStatus = window.navigator.onLine;
    // console.log(internetStatus)

    function getWeatherIcon(x){
        if(x===1000){
            return onek;
        }
        else if(x===1003){
            return onekandthree;
        }
        else if(x===1006){
            return onekandsix;
        }
        else if(x===1009){
            return onekandnine;
        }
        else if(x===1063){
            return onekandsixtythree;
        }
        else if(x===1072){
            return onekandseventytwo;
        }
        else if(x===1087){
            return onekandeightyseven;
        }
        else if(x===1114){
            return onekandhundrendfourteen;
        }
        else if(x===1135){
            return onekandhundrendthirtyfive;
        }
        else if(x===1153){
            return onekandhundrendfiftythree;
        }
        else if(x===1171){
            return onekandhundrendsevwntyone;
        }
        else if(x===1183){
            return onekandhundrendeightythree;
        }
        else{
            return nothingPic;
        }
    }
    if(internetStatus === false){
        return(<>
            <div id="display2" className='container d-flex justify-content-center align-items-center'>
                <div><h2>Please! Connect to your internet Connection </h2></div>
            </div>
            </>)
    }

    if(props.info.locationName !== ""){
        return (
        <>
        <div id="display" className="container">
            <div className="row">
                <div className="col-sm-12 curr_result">
                    <h2>{props.info.locationName}</h2>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.code)} alt="sun"/>
                    <p>{props.info.currentTemp}<sup>o</sup> c</p>
                </div>
            </div>
            <div className="row">
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[0].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[0].code)} alt="sun"/>
                    <p>{props.info.forecast[0].dayTemp}<sup>o</sup> c</p>
                </div>
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[1].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[1].code)} alt="sun"/>
                    <p>{props.info.forecast[1].dayTemp}<sup>o</sup> c</p>
                </div>
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[2].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[2].code)} alt="sun"/>
                    <p>{props.info.forecast[2].dayTemp}<sup>o</sup> c</p>
                </div>
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[3].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[3].code)} alt="sun"/>
                    <p>{props.info.forecast[3].dayTemp}<sup>o</sup> c</p>
                </div>
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[4].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[4].code)} alt="sun"/>
                    <p>{props.info.forecast[4].dayTemp}<sup>o</sup> c</p>
                </div>
                <div className="smallCard col-sm">
                    <p>{getDayName(new Date(props.info.forecast[5].date))}</p>
                    <img className="sun img-fluid" src={getWeatherIcon(props.info.forecast[5].code)} alt="sun"/>
                    <p>{props.info.forecast[5].dayTemp}<sup>o</sup> c</p>
                </div> 
             </div>
        </div>
        </>)
    }else{
        return(<>
        <div id="display2" className='container d-flex justify-content-center align-items-center'>
            <div><h2>Please! search an city</h2></div>
        </div>
        </>)
    }
}
export default DisplayWeather;
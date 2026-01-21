import React from 'react';

const WeatherDisplay=(props)=>{
    const {temperature,conditions}=props.data;
    console.log(temperature,conditions);
    return (
        <>
        <span style={temperature>20?{color:"rgb(255, 0, 0)"}:{color:"rgb(0, 0, 255)"}}>
            <p>Temperature: {temperature}</p>
            <p>Conditions: {conditions}</p>
        </span>
        </>
    );  
}
export default WeatherDisplay;
import React from 'react';

const WeatherDisplay=(props)=>{
    const {temperature,conditions}=props.data;
    console.log(temperature,conditions);
    return (
        <>
        <span style={temperature<20?{color:"red"}:{color:"blue"}}>
            <p>Temperature: {temperature}</p>
            <p>Conditions: {conditions}</p>
        </span>
        </>
    );  
}
export default WeatherDisplay;
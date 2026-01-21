import React from 'react';

const WeatherDisplay=(props)=>{
    const {temperature,conditions}=props.data;
    console.log(temperature,conditions);
    return (
        <>
        
            <p style={temperature<20?{color:"red"}:{color:"blue"}}>Temperature: {temperature}</p>
            <span >Conditions: {conditions}</span>
        </>
    );  
}
export default WeatherDisplay;
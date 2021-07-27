import React from 'react'

function TimeOfDay(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours<12){
        timeOfDay = "Morning"
    }else if(hours>=12&&hours<15){
        timeOfDay = "Afternoon"
    }else if(hours>=15&&hours<18){
        timeOfDay = "Evening"
    }else{
        timeOfDay = "Night"
    }

    return(<h2 className='timeOfDay'>Good {`${timeOfDay}`}</h2>)
}

export default TimeOfDay
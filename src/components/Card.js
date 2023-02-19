import React from 'react'

import { GoLocation } from "react-icons/go";

export default function Card(props){

    return (
        <div className="wrapperMain">
        <img src={props.imageUrl} alt={props.location}/>
        <div className="info">
             <span href="#"><GoLocation/>{props.location}</span> 
             <a className="googleMaps" href={props.googleMapsUrl} >View on GoogleMaps</a>
             <h1>{props.title}</h1>
             <span className='spanFrom'>{props.startDate}</span>
             <span className='spanTo'>{props.endDate}</span>
             <p className="description">{props.description}</p>
        </div>
        </div>
    )
}

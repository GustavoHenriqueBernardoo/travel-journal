import React from "react";

export default function Card(props) {

  console.log(props)
  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" alt="location"></img>
      <section className="card--section">
        <p className="card--location">
          <i
            class="ri-map-pin-line">
          </i>
          {props.location}
          <span className="card--googleMap">
            <a href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </span>
        </p>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--date">{props.startDate} - {props.endDate}</p>
        <p className="card--description">{props.description}</p>
      </section>
    </div>
  )
}
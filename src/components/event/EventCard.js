import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    return (
      <div className="card mb-2">
        <h5 className="card-title text-center font-red mt-4">
          <strong>{this.props.event.title}</strong>
        </h5>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>Start Time: {this.props.event.start.replace("T", " @ ")}</p>
              {this.props.event.end && (
                <p>End Time: {this.props.event.end.replace("T", " @ ")}</p>
              )}
            </div>
            <div className="col-6">
              {this.props.event.venue && <p>Venue: {this.props.event.venue}</p>}
              <p>Address: {this.props.event.address}</p>
            </div>
          </div>
        </div>
        {this.props.event.img && (
          <img
            className="card-img-bottom"
            src={`data:${this.props.event.img.mimeType};base64,${new Buffer(
              this.props.event.img.data
            ).toString("base64")}`}
            alt="event"
          />
        )}
      </div>
    );
  }
}
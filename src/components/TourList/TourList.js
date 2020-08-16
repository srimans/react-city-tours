import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <React.Fragment>
        <h1>This is my sample application to show tour list</h1>
        <section className="tourlist">
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

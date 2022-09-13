import { Data } from "./Data";
import React, { useState } from "react";
import "./table.css";

export default function Table() {
  const [movies, setMovies] = useState(Data);
  const [prevType, setPrevType] = useState("");

  function handdleClick(type) {
    movies.sort((a, b) => {
      if (a[type] > b[type]) {
        return 1;
      } else if (a[type] < b[type]) {
        return -1;
      } else {
        return 0;
      }
    });
    setPrevType(type);
    console.log(movies);
  }

  return (
    <div className="table">
      <h2>"showing the database"</h2>
      <table className="tab">
        <thead>
          <tr className="one">
            <td onClick={() => handdleClick("title")}>Title</td>

            <td onClick={() => handdleClick("numberInStock")}>Stock</td>
            <td onClick={() => handdleClick("dailyRentalRate")}>Rate</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((value, index) => {
            return (
              <tr className="two" key={value._id}>
                <td>{value.title}</td>

                <td>{value.numberInStock}</td>
                <td>{value.dailyRentalRate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

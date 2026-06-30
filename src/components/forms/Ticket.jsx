import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/ticket.css";

export const Ticket = () => {
  const { register, handleSubmit } = useForm();
  const [ticketData, setticketData] = useState({})
  const [isSubmmited, setisSubmmited] = useState(false)


  const submitHandler = (data) => {
    console.log(data);
    setticketData(data)
    setisSubmmited(true)
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TICKET</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>MOVIE</label>
          <select {...register("movieName")}>
            <option value="dilwale dulhaniya Le jaynge">DDLJ</option>
            <option value="KGF">KGF</option>
            <option value="DHURANDHAR">Dhurandhar</option>
          </select>
        </div>
        <div>
          <label>DATE</label>
          <input type="date" {...register("date")}></input>
        </div>
        <div>
          <label>TIME</label>
          <select {...register("movieTime")}>
            <option value="11">11-3</option>
            <option value="3">3-6</option>
            <option value="6">6-9</option>
            <option value="9">9-12</option>
          </select>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>

      {
        isSubmmited && <div className="ticket-card">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE2Dxk0QXfJDVv_G4oOTpfmKDJv154cShXCLB5-vxG5sWlQ2EweVye1moNc1DDrgtzmNAMN03wZ7W6ppZHTkrzy92-eKN6gvpp3GWv-03PYn3NbX06v7nwZv2QSYS1eyj8KVK73=s1360-w1360-h1020-rw"
          alt="movie"
          className="movie-poster"
        />

        <div className="ticket-content">
          <h2>{ticketData.movieName} (U)</h2>

          <p>Hindi, 2D</p>
          <p>{ticketData.date} | {ticketData.movieTime}| PM</p>
          <p>Maratha Mandir, Mumbai Central</p>
        </div>

        <div className="ticket-label">M-Ticket</div>
      </div>
      }
    </div>
  );
};

import axios from "axios";
import React, { useState } from "react";

export const OmdbSearch = () => {
  const [movieList, setmovieList] = useState([]);
  const [movieName, setmovieName] = useState("")

  const searchMovie = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=apikey&s=${movieName}`,
    );
    console.log(res); //axios object
    console.log(res.data); //api response..
    console.log(res.data.Search); //[] array
    setmovieList(res.data.Search); //[] --->movieList
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OMDB SEARCH</h1>
      <input type="text" onChange={(event)=>{setmovieName(event.target.value)}}></input>

      <button onClick={searchMovie}>SEARCH</button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>IMDB ID</th>
            <th>YEAR</th>
            <th>POSTER</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => {
            return <tr>
                <td>{movie.Title}</td>
                <td>{movie.imdbID}</td>
                <td>{movie.Year}</td>
                <td>
                    <img src={movie.Poster} style={{height:"150px",width:"150px"}}></img>
                </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

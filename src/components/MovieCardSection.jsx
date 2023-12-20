import React from "react";
import { v4 as uuidv4 } from "uuid";
function Moviesection({
  title,
  year,
  runtime,
  genres,
  imdbRating,
  imdbVotes,
  img,
}) {
  return (
    <section className="card-section flex mx-auto w-[450px] h-[250px] bg-slate-500 my-4 rounded-xl shadow-xl hover:scale-110">
      <div className="image h-[150px] p-4">
        <img
          src={`${img}`}
          alt=""
          className="movie-image rounded-xl h-[100px]"
        />
      </div>
      <div className="content w-fit flex flex-col justify-around mx-auto text-[10px]">
        <p>Title: {title}</p>
        <p>Year: {year}</p>
        <p>Runtime: {runtime}</p>
        <div className="flex flex-wrap items-center">
          Genres:
          {genres.map((item, i) => (
            <p
              className="m-1 p-1 px-3 bg-red-400 rounded-xl hover:scale-105"
              key={uuidv4()}
            >
              {item}
            </p>
          ))}
        </div>
        <p>IMDB Ratings: {imdbRating}</p>
        <p>IMDB Votes: {imdbVotes}</p>
      </div>
    </section>
  );
}

export default Moviesection;

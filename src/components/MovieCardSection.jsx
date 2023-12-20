import React from "react";

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
        <p className="flex flex-wrap items-center">
          Genres:
          {genres.map((item) => (
            <p className="m-1 p-1 px-3 bg-red-400 rounded-xl hover:scale-105">
              {item}
            </p>
          ))}
        </p>
        <p>IMDB Ratings: {imdbRating}</p>
        <p>IMDB Votes: {imdbVotes}</p>
      </div>
    </section>
  );
}

export default Moviesection;

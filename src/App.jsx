import "./App.css";
import moviesdata from "./data/movies";
import MovieCardSection from "./components/MovieCardSection";
import { v4 as uuidv4 } from "uuid";
function App() {
  return (
    <>
      <div className="App">
        <section className="movie-list-section">
          <h1 className="text-3xl text-center p-5 font-bold">
            movie-list-section
          </h1>
          {moviesdata.map((movie, i) => {
            return (
              <MovieCardSection
                key={uuidv4()}
                img={movie.image}
                title={movie.title}
                year={movie.year}
                runtime={movie.runtime}
                image={movie.image}
                genres={movie.genres}
                imdbRating={movie.imdbRating}
                imdbVotes={movie.imdbVotes}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;

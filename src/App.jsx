import "./App.css";
import moviesdata from "./data/movies";
import MovieCardSection from "./components/MovieCardSection";
function App() {
  return (
    <>
      <div className="App">
        <section className="movie-list-section">
          {moviesdata.map((movie) => {
            return (
              <MovieCardSection
                key={movie.id}
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

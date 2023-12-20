/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import MovieLists from "./components/MovieLists";
import movies from "./data/movies";
function App() {
  return (
    <div className="App">
      <h1
        css={css`
          color: #000;
          text-align: center;
          font-family: Kanit;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          margin: 70px;
        `}
      >
        Movie List Selection
      </h1>
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return <MovieLists key={index} movies={item} />;
        })}
      </section>
    </div>
  );
}

export default App;

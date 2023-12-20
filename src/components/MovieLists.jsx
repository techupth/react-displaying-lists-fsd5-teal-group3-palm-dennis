/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const MovieLists = ({ movies }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 10px;
          background: #fff;
          width: 450px;
          height: 250px;
          border-radius: 10px;
          color: #181818;
          padding: 14px;
          box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        `}
      >
        <div
          css={css`
            align-self: flex-start;
            margin: 20px 20px 0 0;
          `}
        >
          <img
            css={css`
              width: 105px;
              border-radius: 5px;
            `}
            src={`${movies.image}`}
            alt={`${movies.title}'s image`}
          />
        </div>
        <div
          css={css`
            width: 300px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
          `}
        >
          <p>Title: {movies.title}</p>
          <p>Year: {movies.year}</p>
          <p>Runtime: {movies.runtime}</p>
          <p>
            Genres:{" "}
            {movies.genres.map((item) => {
              return (
                <span
                  css={css`
                    color: #000;
                    font-family: Kanit;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                    border-radius: 10px;
                    background: #eaac99;
                    padding: 4px 6px;
                    margin-right: 5px;
                  `}
                >
                  {item}
                </span>
              );
            })}
          </p>
          <p>IMDB Ratings: {movies.imdbRating}</p>
          <p>IMDB Votes: {movies.imdbVotes}</p>
        </div>
      </div>
    </>
  );
};

export default MovieLists;

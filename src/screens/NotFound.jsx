import React, { useContext } from "react"
import Header from "../components/Header"
import { PopularContext } from "../context/PopularContextProvider"
import MovieCard from "../components/MovieCard"
import styled from "styled-components"

const CardsWrapper = styled.div`
  display: float;
  justify-content: space-between;
`

const NotFound = () => {
  const value = useContext(PopularContext)
  console.log(value.length)
  return (
    <>
      <Header title="Page Not Found" />
      <hr />
      <p>Have a look at these movies</p>
      <CardsWrapper>
        {value.length !== 0 &&
          value
            .slice(1)
            .slice(-3)
            .map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                releasedOn={movie.release_date.split("-")[0]}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                linkTo={`/asset/${movie.id}`}
              />
            ))}
      </CardsWrapper>
      <div></div>
    </>
  )
}
export default NotFound

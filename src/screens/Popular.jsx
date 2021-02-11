import React, { useContext } from "react"
import MovieCard from "../components/MovieCard"
import Loading from "../components/Loading"
import Header from "../components/Header"
import { PopularContext } from "../context/PopularContextProvider"
import styled from "styled-components"

const PopularGridContainer = styled.div`
  background-image: radial-gradient(
    rgba(83, 83, 101, 1),
    rgba(46, 46, 56, 0.6),
    rgba(46, 46, 56, 0)
  );

  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  justify-items: center;
  @media (max-width: 411px) {
    grid-template-columns: auto;
  }
  @media (min-width: 411px) and (max-width: 736px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 736px) and (max-width: 1014px) {
    grid-template-columns: auto auto auto auto;
  }
`

const Popular = () => {
  const popularAssets = useContext(PopularContext)

  console.log(popularAssets)

  return (
    <div>
      <Header title="Popular Now" />
      {!popularAssets.length ? (
        <Loading />
      ) : (
        <div>
          <PopularGridContainer>
            {popularAssets.map(movie => (
              <div key={movie.id}>
                <MovieCard
                  linkTo={`/asset/${movie.id}`}
                  title={`${movie.title}`}
                  releasedOn={movie.release_date.split("-")[0]}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </div>
            ))}
          </PopularGridContainer>
        </div>
      )}
    </div>
  )
}

export default Popular

import React, { useContext } from "react"
import MovieCard from "../components/MovieCard"
import Loading from "../components/Loading"
import Header from "../components/Header"
import { PopularContext } from "../context/PopularContextProvider"
import styled from "styled-components"

const Container = styled.div`
  padding: 100px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PopularGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
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
  const { popularAssets, loading } = useContext(PopularContext)

  return (
    <Container>
      {!loading ? (
        <div>
          <Header title="Popular Now" />
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
      ) : (
        <Loading />
      )}
    </Container>
  )
}

export default Popular

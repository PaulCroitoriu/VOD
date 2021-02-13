import React, { useContext } from "react"
import Header from "../components/Header"
import { PopularContext } from "../context/PopularContextProvider"
import MovieCard from "../components/MovieCard"
import styled from "styled-components"

const CardsWrapper = styled.div`
  display: float;
  justify-content: center;
`

const Card = styled.div`
  padding: 5px 40px;
`

const NotFound = () => {
  const { popularAssets, loading } = useContext(PopularContext)

  return (
    <>
      <Header title="Page Not Found" />
      <hr />
      <p>Have a look at these great movies instead. </p>
      <CardsWrapper>
        {!loading &&
          popularAssets
            .slice(1)
            .slice(-3)
            .map(movie => (
              <Card>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  releasedOn={movie.release_date}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  linkTo={`/asset/${movie.id}`}
                />
              </Card>
            ))}
      </CardsWrapper>
    </>
  )
}
export default NotFound

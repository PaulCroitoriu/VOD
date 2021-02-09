import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"
import Loading from "../components/Loading"
import MovieCard from "../components/MovieCard"
import { CategoriesContext } from "../context/CategoriesContextProvider"
import Header from "../components/Header"
import styled from "styled-components"

const Container = styled.div`
  margin: 0;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 20px;
`

const MoviesByCategory = ({ match }) => {
  const value = useContext(ItemContext)
  const categories = useContext(CategoriesContext)

  return (
    <>
      <Container>
        <div className="title">
          {!categories.length
            ? ""
            : categories.map(
                category =>
                  category.id === Number(match.params.category_id) && (
                    <div key={category.id}>
                      <Header title={category.name} />
                    </div>
                  )
              )}
        </div>
        <CategoriesGrid>
          {!value.length ? (
            <Loading />
          ) : (
            value.map(movie => {
              const idFind = movie.genre_ids.find(
                x => x === Number(match.params.category_id)
              )

              return (
                idFind && (
                  <div key={movie.id}>
                    <MovieCard
                      linkTo={`/asset/${movie.id}`}
                      title={movie.title}
                      releasedOn={movie.release_date.split("-")[0]}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                )
              )
            })
          )}
        </CategoriesGrid>
      </Container>
    </>
  )
}

export default MoviesByCategory

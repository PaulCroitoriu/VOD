import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"
import Loading from "../components/Loading"
import { CategoriesContext } from "../context/CategoriesContextProvider"

const MoviesByCategory = ({ match }) => {
  const value = useContext(ItemContext)

  return (
    <div>
      {!value.length ? (
        <Loading />
      ) : (
        value.map(movie => {
          const movieIds = movie.genre_ids

          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
            </div>
          )
        })
      )}
    </div>
  )
}

export default MoviesByCategory

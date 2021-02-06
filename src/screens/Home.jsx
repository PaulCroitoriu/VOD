import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"
import Loading from "../components/Loading"

const Home = () => {
  const value = useContext(ItemContext)

  console.log(value)

  return (
    <div>
      {!value.length ? (
        <Loading />
      ) : (
        value.slice(0, 5).map(movie => (
          <div key={movie.id}>
            <img
              width={250}
              height="auto"
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <h1>{movie.title}</h1>
          </div>
        ))
      )}
    </div>
  )
}
export default Home

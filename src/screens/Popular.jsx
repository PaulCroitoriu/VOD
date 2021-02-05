import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"
import { Link } from "react-router-dom"

const Popular = () => {
  const [value] = useContext(ItemContext)

  console.log(value)
  return (
    <div>
      {value.map(movie => (
        <div key={movie.id}>
          <Link to={`/asset/${movie.id}`}>
            <img
              width={200}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Popular

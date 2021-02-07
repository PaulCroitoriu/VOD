import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CategoriesContext } from "../context/CategoriesContextProvider"
import Loading from "../components/Loading"

const Categories = () => {
  const value = useContext(CategoriesContext)
  console.log(value)

  return (
    <div>
      <ul>
        {!value.length ? (
          <Loading />
        ) : (
          value.map(genre => (
            <li key={genre.id}>
              <Link to={`/movies/${genre.id}`}>{genre.name}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Categories

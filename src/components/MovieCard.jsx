import React from "react"
import { Link } from "react-router-dom"

const MovieCard = ({ title, src, linkTo }) => {
  return (
    <div>
      <Link to={linkTo}>
        <img width={200} src={src} alt={title} />
      </Link>
      <h3>{title}</h3>
    </div>
  )
}

export default MovieCard

import React, { useState, useEffect } from "react"
// import { ItemContext } from "../context/ItemContextProvider"
import MovieCard from "../components/MovieCard"
import Loading from "../components/Loading"

const Popular = () => {
  const [popularAssets, setPopularAssets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://video-proxy.3rdy.tv/api/vod/popular"
      )
      const { data } = await response.json()

      setPopularAssets(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {popularAssets.map(movie => (
            <div key={movie.id}>
              <MovieCard
                linkTo={`/asset/${movie.id}`}
                title={`${movie.title} (${movie.release_date.split("-")[0]})`}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Popular

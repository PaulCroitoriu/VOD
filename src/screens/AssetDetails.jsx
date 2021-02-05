import React, { useState, useEffect } from "react"

const AssetDetails = ({ match }) => {
  const [assetDetails, setAssetDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      `https://video-proxy.3rdy.tv/api/vod/asset/${match.params.id}`
    )
    const { data } = await response.json()

    console.log(data)

    setAssetDetails(data)
    setLoading(false)
  }

  const { poster_path, title, overview, release_date, genres } = assetDetails

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>
            <img
              width={200}
              alt={title}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
            />
          </div>
          <div>
            <h2>
              {title} ({release_date.split("-")[0]})
            </h2>
            <p>{overview}</p>
          </div>
          <div>
            <p>Genre: </p>
            {genres.map(genre => (
              <ul key={genre.id}>
                <li>{genre.name}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AssetDetails

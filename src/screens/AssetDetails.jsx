import React, { useState, useEffect } from "react"

const AssetDetails = ({ match }) => {
  const [assetDetails, setAssetDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [match.params.id])

  const fetchData = async () => {
    const response = await fetch(
      `https://video-proxy.3rdy.tv/api/vod/asset/${match.params.id}`
    )
    const { data } = await response.json()

    console.log(data)

    setAssetDetails(data)
    setLoading(false)
  }

  const { poster_path, title, overview, genre, release_date } = assetDetails

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
        </div>
      )}
    </>
  )
}

export default AssetDetails

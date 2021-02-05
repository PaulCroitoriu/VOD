import React, { useState, useEffect } from "react"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://video-proxy.3rdy.tv/api/vod/popular"
      )
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Popular assets</h1>
    </div>
  )
}

export default Popular

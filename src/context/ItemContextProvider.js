import React, { useState, useEffect, createContext } from "react"

export const ItemContext = createContext()

export const ItemProvider = ({ children }) => {
  const [popularAssets, setpopularAssets] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://video-proxy.3rdy.tv/api/vod/popular"
      )

      const { data, success } = await response.json()

      if (success) {
        setpopularAssets(data)
      }
    }
    fetchData()
  }, [])

  return (
    <ItemContext.Provider value={popularAssets}>
      {children}
    </ItemContext.Provider>
  )
}

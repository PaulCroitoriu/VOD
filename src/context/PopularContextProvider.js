import React, { useState, useEffect, createContext } from "react"
import { getPopular } from "../service/API"

export const PopularContext = createContext()

export const PopularAssetsProvider = ({ children }) => {
  const [popularAssets, setpopularAssets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setpopularAssets(await getPopular())
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <PopularContext.Provider value={{ popularAssets, loading }}>
        {children}
      </PopularContext.Provider>
    </>
  )
}

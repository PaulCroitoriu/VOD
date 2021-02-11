import React, { useState, useEffect, createContext } from "react"
import { getPopular } from "../service/API"
import Loading from "../components/Loading"

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
      {!loading ? (
        <PopularContext.Provider value={popularAssets}>
          {children}
        </PopularContext.Provider>
      ) : (
        <Loading />
      )}
    </>
  )
}

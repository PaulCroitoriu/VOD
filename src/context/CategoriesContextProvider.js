import React, { useState, useEffect, createContext } from "react"

export const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://video-proxy.3rdy.tv/api/vod/category"
      )
      const { data, success } = await response.json()
      if (success) {
        setCategories(data.genres)
      }
    }
    fetchData()
  }, [])

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  )
}

import React, { useState, useEffect, createContext } from "react"
import { getCategories } from "../service/API"

export const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setCategories(await getCategories())
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <CategoriesContext.Provider value={{ categories, loading }}>
        {children}
      </CategoriesContext.Provider>
    </>
  )
}

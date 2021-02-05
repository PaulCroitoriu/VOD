import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://video-proxy.3rdy.tv/api/vod/category"
      )
      const data = await response.json()

      console.log(data.data.genre)
      setCategories(data.data.genres)
    }
    fetchData()
  }, [])
  return (
    <div>
      <ul>
        {categories &&
          categories.map(genre => (
            <li>
              <Link to={"/movies/:category_id"}>{genre.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories

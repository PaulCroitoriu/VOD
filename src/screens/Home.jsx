import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"

const Home = () => {
  const value = useContext(ItemContext)
  return (
    <div>
      {console.log(value)}
      <img src="" alt="" />
      <div>
        <h3>titlu</h3>
      </div>
    </div>
  )
}
export default Home

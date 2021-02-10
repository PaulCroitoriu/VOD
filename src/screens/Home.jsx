import React, { useContext } from "react"
import { ItemContext } from "../context/ItemContextProvider"
import Carousel from "../components/Carousel/Carousel"
import styled from "styled-components"

const HomePage = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, #2e2e38),
    linear-gradient(to top, transparent 50%, #2e2e38),
    linear-gradient(to right, transparent 50%, #2e2e38),
    linear-gradient(to left, transparent 50%, #2e2e38), #6e6e87;
`

const Home = () => {
  const value = useContext(ItemContext)

  return (
    <HomePage>
      <Carousel value={value} />
    </HomePage>
  )
}
export default Home

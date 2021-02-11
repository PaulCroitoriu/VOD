import React, { useContext } from "react"
import { PopularContext } from "../context/PopularContextProvider"
import Carousel from "../components/Carousel/Carousel"
import styled from "styled-components"

const HomePage = styled.div`
  background: linear-gradient(to bottom, transparent 50%, #2e2e38),
    linear-gradient(to top, transparent 50%, #2e2e38),
    linear-gradient(to right, transparent 50%, #2e2e38),
    linear-gradient(to left, transparent 50%, #2e2e38), #6e6e87;
`

const Home = () => {
  const { popularAssets, loading } = useContext(PopularContext)

  return (
    <HomePage>
      <Carousel popularAssets={popularAssets} loading={loading} />
    </HomePage>
  )
}
export default Home

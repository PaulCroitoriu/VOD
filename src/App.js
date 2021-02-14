import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./screens/Home"
import Header from "./components/Nav"
import Categories from "./screens/Categories"
import MoviesByCategory from "./screens/MoviesByCategory"
import AssetDetails from "./screens/AssetDetails"
import Popular from "./screens/Popular"
import NotFound from "./screens/NotFound"
import { PopularAssetsProvider } from "./context/PopularContextProvider"
import { CategoriesProvider } from "./context/CategoriesContextProvider"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Container>
      <Header />
      <PopularAssetsProvider>
        <CategoriesProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/movies/:category_id" component={MoviesByCategory} />
            <Route path="/asset/:id" component={AssetDetails} />
            <Route path="/popular" component={Popular} />
            <Route component={NotFound} />
          </Switch>
        </CategoriesProvider>
      </PopularAssetsProvider>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #dfe0e2;
`

export default App

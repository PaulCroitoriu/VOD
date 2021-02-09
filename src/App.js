import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from "styled-components"
import Home from "./screens/Home"
import Header from "./components/Nav"
import Categories from "./screens/Categories"
import MoviesByCategory from "./screens/MoviesByCategory"
import AssetDetails from "./screens/AssetDetails"
import Popular from "./screens/Popular"
import { ItemProvider } from "./context/ItemContextProvider"
import { CategoriesProvider } from "./context/CategoriesContextProvider"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Main>
          <ItemProvider>
            <CategoriesProvider>
              <Route path="/" exact component={Home} />
              <Route path="/categories" component={Categories} />
              <Route path="/movies/:category_id" component={MoviesByCategory} />
              <Route path="/asset/:id" component={AssetDetails} />
              <Route path="/popular" component={Popular} />
            </CategoriesProvider>
          </ItemProvider>
        </Main>
        <Footer />
      </Container>
    </Router>
  )
}

const Main = styled.div`
  position: relative;
  padding: 6rem;
  height: 70%;
  overflow: scroll;
`
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: #2e2e38;
  color: #dfe0e2;
`

export default App

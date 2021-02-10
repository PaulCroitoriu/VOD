import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./screens/Home"
import Header from "./components/Nav"
import Categories from "./screens/Categories"
import MoviesByCategory from "./screens/MoviesByCategory"
import AssetDetails from "./screens/AssetDetails"
import Popular from "./screens/Popular"
import NotFound from "./screens/NotFound"
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
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" component={Categories} />
                <Route
                  path="/movies/:category_id"
                  component={MoviesByCategory}
                />
                <Route path="/asset/:id" component={AssetDetails} />
                <Route path="/popular" component={Popular} />
                <Route component={NotFound} />
              </Switch>
            </CategoriesProvider>
          </ItemProvider>
        </Main>
        <Footer />
      </Container>
    </Router>
  )
}

const Main = styled.div`
  padding: 3rem 6rem;
  overflow: scroll;
`
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #2e2e38;
  color: #dfe0e2;
`

export default App

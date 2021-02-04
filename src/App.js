import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./screens/Home"
import Header from "./components/Header"
import Categories from "./screens/Categories"
import MoviesByCategory from "./screens/MoviesByCategory"
import AssetDetails from "./screens/AssetDetails"
import Popular from "./screens/Popular"
import NotFound from "./screens/NotFound"

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/movies/:category_id" component={MoviesByCategory} />
      <Route path="/asset/:id" component={AssetDetails} />
      <Route path="/popular" component={Popular} />
    </Router>
  )
}

export default App

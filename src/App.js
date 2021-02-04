import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
    </Router>
  )
}

export default App

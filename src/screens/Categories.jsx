import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CategoriesContext } from "../context/CategoriesContextProvider"
import Loading from "../components/Loading"
import styled from "styled-components"
import Header from "../components/Header"
import { getCategories } from "../service/API"

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto auto;
  padding: 10px;

  @media (max-width: 736px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 414px) {
    grid-template-columns: auto;
  }
`
const CardCategory = styled(Link)`
  background-color: #a491d3;
  color: #f5f2b8;
  text-decoration: none;
  padding: 20px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 19px #111318;
  &:hover {
    cursor: pointer;
    background-color: #f9dad0;
    color: black;
    font-weight: 600;
  }
`

const Categories = () => {
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
      <Header title="Categories" />

      {!loading ? (
        <GridWrapper>
          {categories.map(category => (
            <CardCategory key={category.id} to={`/movies/${category.id}`}>
              {category.name}
            </CardCategory>
          ))}
        </GridWrapper>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Categories

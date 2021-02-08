import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CardWrapper = styled.div`
  width: 200px;
  margin-bottom: 10px;

  img {
    box-shadow: 10px 3px 10px #1b1b1e;
    width: 200px;
    border-radius: 9px;
  }
`

const Title = styled.div`
  margin: 5px 0;
  padding: 5px;
  width: 200px;
  text-align: center;
  font-size: 1.3rem;
`

const ReleasedYear = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 0.9rem;
`

const MovieCard = ({ title, src, linkTo, releasedOn }) => {
  return (
    <>
      <CardWrapper>
        <Link to={linkTo}>
          <img src={src} alt={title} />
        </Link>
        <Title>{title}</Title>
        <ReleasedYear>( {releasedOn} )</ReleasedYear>
      </CardWrapper>
    </>
  )
}

export default MovieCard

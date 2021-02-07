import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CardWrapper = styled.div`
  width: 200px;
  margin-bottom: 40px;

  img {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    width: 200px;
    border-radius: 3px;
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

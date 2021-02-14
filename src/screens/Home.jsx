import React, { useContext, useState } from "react"
import { PopularContext } from "../context/PopularContextProvider"
import styled from "styled-components"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { Link } from "react-router-dom"

const HomePage = styled.div`
  width: 60%;
  height: 400px;
  text-align: center;
  .title {
    font-size: 1.5rem;
  }
`

const CarouselInner = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 1px 30px 60px 4px black;
  display: flex;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: ease-out;
  transition-duration: 0.7s;

  .center {
    flex: 80%;
  }

  .right,
  .left {
    flex: 5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      transition-duration: 0.2s;
    }
  }
`

const Home = () => {
  const { popularAssets, loading } = useContext(PopularContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  const length = 20

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  return (
    <>
      {!loading && (
        <HomePage>
          <CarouselInner
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${popularAssets[currentIndex].backdrop_path})`,
            }}
          >
            <div className="left" onClick={prevSlide}>
              <BiLeftArrow />
            </div>
            <Link
              className="center"
              to={`/asset/${popularAssets[currentIndex].id}`}
            ></Link>
            <div className="right" onClick={nextSlide}>
              <BiRightArrow />
            </div>
          </CarouselInner>
          <div className="title">{popularAssets[currentIndex].title}</div>
        </HomePage>
      )}
    </>
  )
}

export default Home

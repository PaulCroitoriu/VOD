import React, { useState } from "react"
import Loading from "../Loading"
import "./Carousel.css"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { Link } from "react-router-dom"

const Carousel = ({ popularAssets, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 10

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  return (
    <>
      {!loading ? (
        <div className="slider">
          <BiLeftArrow className="arrow-left" onClick={prevSlide} />
          <BiRightArrow className="arrow-right" onClick={nextSlide} />
          {popularAssets.slice(0, 10).map((movie, i) => {
            return (
              <div
                className={
                  i === currentIndex || i === currentIndex + 1
                    ? "slide active"
                    : "slide"
                }
                key={movie.id}
              >
                {i === currentIndex && (
                  <>
                    <Link to={`/asset/${movie.id}`}>
                      <img
                        className="image"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    </Link>
                    <h3 className="title">{movie.title}</h3>
                  </>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Carousel

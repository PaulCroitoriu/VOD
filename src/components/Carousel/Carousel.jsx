import React, { useState } from "react"
import Loading from "../Loading"
import "./Carousel.css"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"

const Carousel = ({ value }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 7

  if (Array.isArray(value) && value.length <= 0) {
    return null
  }
  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  console.log(currentIndex)

  return (
    <>
      <div className="container">
        {Array.isArray(value) && value.length > 0 ? (
          <div className="slider">
            {console.log(value.length)}
            <BiLeftArrow className="arrow-left" onClick={prevSlide} />
            <BiRightArrow className="arrow-right" onClick={nextSlide} />
            {value.slice(0, 7).map((movie, i) => {
              return (
                <div
                  className={i === currentIndex ? "slide active" : "slide"}
                  key={movie.id}
                >
                  {i === currentIndex && (
                    <img
                      className="image"
                      width={440}
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}

export default Carousel

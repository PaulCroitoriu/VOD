import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react"
import Loading from "../components/Loading"
import MovieCard from "../components/MovieCard"
import { CategoriesContext } from "../context/CategoriesContextProvider"
import Header from "../components/Header"
import styled from "styled-components"
import { getMoviesByCategory } from "../service/API"

const Container = styled.div`
  margin: 0;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  @media (max-width: 760px) {
    grid-template-columns: auto auto;
  }
`

const MoviesByCategory = ({ match }) => {
  const [assetsByGenres, setAssetsByGenres] = useState([])
  const [page, setPage] = useState(1)
  const categories = useContext(CategoriesContext)

  const observer = useRef()
  const lastMovieRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [])

  useEffect(() => {
    const loadMovies = async () => {
      const { data, success } = await getMoviesByCategory(
        match.params.category_id,
        page
      )
      if (success) {
        setAssetsByGenres(prev => [...prev, ...data.results])
      }
    }
    loadMovies()
  }, [page, match.params.category_id])

  console.log(assetsByGenres)

  return (
    <>
      <Container>
        <div className="title">
          {!categories.length
            ? ""
            : categories.map(
                category =>
                  category.id === Number(match.params.category_id) && (
                    <div key={category.id}>
                      <Header title={category.name} />
                    </div>
                  )
              )}
        </div>
        <CategoriesGrid>
          {!assetsByGenres.length ? (
            <Loading />
          ) : (
            assetsByGenres.map((movie, index) => {
              const idFind = movie.genre_ids.find(
                x => x === Number(match.params.category_id)
              )

              return (
                idFind &&
                (assetsByGenres.length === index + 1 ? (
                  <div ref={lastMovieRef} key={movie.id}>
                    <MovieCard
                      linkTo={`/asset/${movie.id}`}
                      title={movie.title}
                      releasedOn={movie.release_date}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                ) : (
                  <div key={movie.id}>
                    <MovieCard
                      linkTo={`/asset/${movie.id}`}
                      title={movie.title}
                      releasedOn={movie.release_date}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                ))
              )
            })
          )}
        </CategoriesGrid>
      </Container>
    </>
  )
}

export default MoviesByCategory

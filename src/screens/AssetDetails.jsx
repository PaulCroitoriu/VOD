import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading"
import styled from "styled-components"
import ModalPlayer from "../components/Modal/ModalPlayer"

const AssetGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 20px;

  .item {
    grid-row-start: 1;
    grid-row-end: 3;
    box-shadow: 1px 3px 27px 10px black;
    border-radius: 5px;
    img {
      border-radius: 5px;
      height: 100%;
    }
  }

  .button-player {
    grid-row-start: 3;
    grid-row-end: 5;
    .btn-watch-trailer {
      background-color: transparent;
      border: 2px solid #23b5d3;
      align-items: center;
      color: #23b5d3;
      width: 100%;
      height: 40px;
      border-radius: 17px;
      &:hover {
        cursor: pointer;
        border: 3px solid #23b5d3;
        outline: none;
      }
    }
  }

  .title {
    grid-row-start: 1;
    grid-row-end: 2;
  }
`

const Title = styled.h1`
  font-size: 40px;
`

const Genres = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 20px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #23b5d3;
    &:hover {
      font-weight: 600;
    }
  }
`
const CastBox = styled.div``

const Cast = styled.div`
  padding-bottom: 10px;
`

const Container = styled.div``

const AssetDetails = ({ match }) => {
  const [assetDetails, setAssetDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/asset/${match.params.id}`
      )
      const { data } = await response.json()

      console.log(data)

      setAssetDetails(data)
      setLoading(false)
    }
    fetchData()
  }, [match.params.id])

  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    release_date,
    genres,
    credits,
    videos,
  } = assetDetails

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container
          style={{
            background: `linear-gradient(to right, transparent 70%, #2e2e3a 99%),
          linear-gradient(to left, transparent 20%, #2e2e3a),
          linear-gradient(to top, transparent 60%, #2e2e3a),
          linear-gradient(to bottom, transparent 40%, #2e2e3a),
          url(https://image.tmdb.org/t/p/original${backdrop_path}) 0 0 / cover`,
          }}
        >
          <AssetGridContainer>
            <div className="item">
              <img
                width={250}
                alt={title}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
              />
            </div>
            <div className="button-player">
              <ModalPlayer videoKey={videos.results[0].key} />
            </div>

            <div className="title">
              <Title>
                {title} ({release_date.split("-")[0]})
              </Title>
              <p>{overview}</p>
            </div>

            <div className="genres-box">
              <p>Genre: </p>
              {genres.map(genre => (
                <Genres key={genre.id}>
                  <Link to={`/movies/${genre.id}`}>{genre.name}</Link>
                </Genres>
              ))}
            </div>

            <CastBox>
              <h4>Cast:</h4>
              {credits.cast.slice(0, 4).map(actor => (
                <Cast key={actor.cast_id}>
                  <div>
                    {actor.name} ( {actor.character} )
                  </div>
                </Cast>
              ))}
            </CastBox>
          </AssetGridContainer>
        </Container>
      )}
    </>
  )
}

export default AssetDetails

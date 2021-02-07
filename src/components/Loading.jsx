import React from "react"
import styled from "styled-components"
import Loader from "react-loader-spinner"

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`

const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader type="Circles" color="#00BFFF" />
    </LoaderWrapper>
  )
}

export default Loading

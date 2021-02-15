import React, { useState } from "react"
import "./ModalPlayer.css"
import ModalVideo from "react-modal-video"

const ModalPlayer = ({ videoKey }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoKey}
        onClose={() => setIsOpen(false)}
      />

      <button className="btn-watch-trailer" onClick={() => setIsOpen(true)}>
        &#9658; Play Trailer
      </button>
    </div>
  )
}
export default ModalPlayer

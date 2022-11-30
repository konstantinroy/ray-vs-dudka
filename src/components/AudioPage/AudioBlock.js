import React from 'react'

function AudioBlock(props) {
    const { audioName, audioLink } = props

    return (
        <div className="audioBlock">
          <h2 className="audioName">{audioName}</h2>
          <audio src={audioLink} controls="controls"></audio>
        </div>
    )
}

export default AudioBlock

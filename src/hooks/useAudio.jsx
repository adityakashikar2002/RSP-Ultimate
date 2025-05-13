import { useState, useEffect } from 'react'

export const useAudio = (url, volume = 0.5) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audio.volume = volume
    playing ? audio.play() : audio.pause()
  }, [playing, audio, volume])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  const play = () => setPlaying(true)
  const stop = () => {
    setPlaying(false)
    audio.currentTime = 0
  }

  return [play, stop]
}
import { useState, useEffect, FC } from 'react'
import Button from 'components/buttons'

type SoundProps = {
    url: string
}
const useAudio = (url: string) => {
    const initialState = typeof Audio !== 'undefined' ? new Audio(url) : undefined
    const [audio] = useState(initialState)

    const [playing, setPlaying] = useState(true)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        if (playing) {
            audio.volume = 0.2
            audio.loop = true
            audio.play()
        } else {
            audio.pause()
        }
    }, [playing])

    return [playing, toggle]
}

const Player: FC<SoundProps> = ({ url }) => {
    const [playing, toggle] = useAudio(url)

    return (
        <Button
            buttonType={'button'}
            buttonTitle={playing ? 'Pause' : 'Play'}
            handleClick={() => toggle}
        />
    )
}

export default Player

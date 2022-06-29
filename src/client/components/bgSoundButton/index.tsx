import { useState, FC } from 'react'
import Button from 'components/buttons'
import styles from 'styles/base.scss'

type SoundProps = {
    url: string
}

const Player: FC<SoundProps> = ({ url}) => {
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio(url) : undefined)
    const [playing, setPlaying] = useState(false)
    const handlePlay = (url:string, status:boolean) => {
        console.log(audio, status)
        if (!status) {
            audio.pause()
        } else {
            audio.volume = 0.1
            audio.loop = true
            audio.play()
        }
    }
    const togglePlay = () => {
        const currStatus = playing !== true
        setPlaying(!playing)
        return handlePlay(url, currStatus)
    }

        return (
        <Button
            buttonType={'button'}
            buttonTitle={''}
            handleClick={togglePlay}
            buttonIconClass={playing ? styles.asVolumeMute : styles.asVolumeUp}
            />
    )
}

export default Player

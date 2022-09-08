import React, {useCallback, useRef, useState} from "react"
import { formatTime } from "@/utils"
import "./index.less"
interface Props {
    value: number;
    progressColor: string;
    activateColor: string;
    duration: number;
    setVideoCurrentTime: (current: number) => void
}
const Progress = (props: Props) => {
  const { progressColor, activateColor, value, setVideoCurrentTime, duration } = props
  const progress = useRef<HTMLDivElement>()
  const [ left, setleft ] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const changeProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const poor = e.clientX - progress.current.getBoundingClientRect().left
    const value = poor / progress.current.getBoundingClientRect().width
    setVideoCurrentTime(value)
  }
  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const poor = e.clientX - progress.current.getBoundingClientRect().left
    const value = poor / progress.current.getBoundingClientRect().width
    setleft(value * 100)
    setCurrentTime(duration * value)
  }
  const currentValue = useCallback(() => {
    return formatTime(currentTime)
  }, [currentTime])
  return (
    <div className="progress-container" onClick={changeProgress} ref={progress} onMouseMove={mouseMove}>
      <div className="progress-tip" style={{left: `${left}%`}}>{currentValue().m}:{currentValue().s}</div>
      <div className="progress-container-base" style={{backgroundColor: progressColor}}>
        <div className="progress-container-value" style={{backgroundColor: activateColor, width: value + "%"}}></div>
      </div>
    </div>
  )
}

export default React.memo(Progress)

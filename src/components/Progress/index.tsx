import React, {useRef} from "react"
import "./index.less"
interface Props {
    value: number;
    progressColor: string;
    activateColor: string;
    setVideoCurrentTime: (current: number) => void
}
const Progress = (props: Props) => {
  const { progressColor, activateColor, value, setVideoCurrentTime } = props
  const progress = useRef<HTMLDivElement>()
  const changeProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const poor = e.clientX - progress.current.getBoundingClientRect().left
    const value = poor / progress.current.getBoundingClientRect().width
    setVideoCurrentTime(value)
  }
  return (
    <div className="progress-container" onClick={changeProgress} ref={progress}>
      <div className="progress-container-base" style={{backgroundColor: progressColor}}>
        <div className="progress-container-value" style={{backgroundColor: activateColor, width: value + "%"}}></div>
      </div>
    </div>
  )
}

export default React.memo(Progress)

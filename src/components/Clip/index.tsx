import React from "react"
import "./index.less"
interface Props {
    duration: number;
    frameGap: number;
    startTime: number;
    endTime: number;
    setStartTime: (startTime: number) => void;
    setEndTime: (startTime: number) => void;
    source: string | Blob;
    frameHeight: number;
}
const Clip = (props: Props) => {
  const { frameHeight } = props
    
  return (
    <div className="clip-container">
      <div className="clip-container-frames" style={{height: `${frameHeight}px`}}></div>
    </div>
  )
}

export default React.memo(Clip)
import React, {useEffect, useRef, useState} from "react"
import { useRecoilState } from "recoil"
import currentFile from "@/store/currentFile"
import "./index.less"
interface Props {
    duration: number;
    frameGap: number;
    startTime: number;
    endTime: number;
    setStartTime: (startTime: number) => void;
    setEndTime: (startTime: number) => void;
    source: string;
    frameHeight: number;
}
const Clip = (props: Props) => {
  const { frameHeight } = props
  const [current, setCurrent] = useRecoilState(currentFile)
  const container = useRef<HTMLDivElement>()
  const [controlWidth, setControlWidth] = useState<string>("100%")
  return (
    <div className="clip-container">
      <div className="workSpace" ref={container}>
        <div className="workSpace-controls" style={{width: controlWidth}}>

        </div>
        <div className="workSpace-frames" style={{height: `${frameHeight}px`}}>
          {
            current.frames.map(frame => {
              return <img src={frame.image} key={frame.s}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(Clip)
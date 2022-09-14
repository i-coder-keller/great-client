import React, {useCallback, useEffect, useRef, useState} from "react"
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
  const controlWidth = useCallback(() => {
    if (container.current) {
      return `${container.current.clientWidth + container.current.children[0].clientWidth - 12}px`
    }else {
      return "100%"
    }
  }, [current.frames])
  const initEvent = () => {
    const left = document.querySelector("#left")
    const right = document.querySelector("#right")
  }
  const leftEvent = (target: HTMLDivElement) => {
    target.addEventListener("mousedown", moveEvent)
  }
  const moveEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target.addEventListener("mousemove", (e: any) => {
      console.log(e)
    })
  }

  return (
    <div className="clip-container">
      <div className="workSpace">
        <div className="workSpace-controls" style={{width: controlWidth()}}>
          <div className="control-left control" id="left"></div>
          <div className="control-right control" id="right"></div>
        </div>
        <div className="workSpace-frames" style={{height: `${frameHeight}px`}} ref={container}>
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
import React, {useEffect, useRef, useState} from "react"
import { computedVideoInfo } from "@/utils"
import "./index.less"
export default () => {
  const [source, setSource] = useState("http://image.liuyongzhi.cn/video/test.mp4")
  const [duration, setDuration] = useState(0)
  const videoPlayer = useRef<HTMLVideoElement>()
  const loadedMetadata = () => {
    setDuration(videoPlayer.current.duration)
  }
  return (
    <div className="great-video-editor-container">
      <div className="great-video-editor-container-controlConsole">
        <div className="great-video-editor-container-controlConsole-playerContainer">
          <video ref={videoPlayer} src={source} onLoadedMetadata={loadedMetadata}/>
        </div>
      </div>
    </div>
  )
}
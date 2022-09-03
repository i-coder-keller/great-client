import React, {useEffect, useRef, useState} from "react"
import Play from "@/assets/videoeditor/play.svg"
import Pause from "@/assets/videoeditor/pause.svg"
import "./index.less"
export default () => {
  const [source, setSource] = useState("http://image.liuyongzhi.cn/video/test.mp4")
  const [duration, setDuration] = useState(0)
  const [state, setState] = useState(false)
  const videoPlayer = useRef<HTMLVideoElement>()
  const loadedMetadata = () => {
    setDuration(videoPlayer.current.duration)
  }
  /**
   * 播放暂停控制
   */
  const broadcastControl = () => {
    if(state) {
      videoPlayer.current.pause()
    } else {
      videoPlayer.current.play()
    }
    setState(state => !state)
  }
  return (
    <div className="great-video-editor-container">
      <div className="great-video-editor-container-controlConsole">
        <div className="great-video-editor-container-controlConsole-playerContainer">
          <video ref={videoPlayer} src={source} onLoadedMetadata={loadedMetadata}/>
        </div>
        <div className="great-video-editor-container-controlConsole-playControl">
          <div className="broadcastControl" style={{backgroundImage: `url(${state ? Pause : Play})`}} onClick={broadcastControl}></div>
        </div>
      </div>
    </div>
  )
}
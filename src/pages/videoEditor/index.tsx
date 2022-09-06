import React, { useRef, useState } from "react"
import Play from "@/assets/videoeditor/play.svg"
import Pause from "@/assets/videoeditor/pause.svg"
import { formatTime } from "@/utils"
import { menus, Selected_Menu } from "./model/menus"
import Volume from "./volume"
import Speed from "./speed"
import "./index.less"
import "./model/menus.less"
let timer: string | number | NodeJS.Timer = null
export default () => {
  const [source, setSource] = useState("https://image.liuyongzhi.cn/video/test.mp4")
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [state, setState] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState<Selected_Menu>("volume")
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

  /**
   * 视频开始播放
   */
  const videoStarPlay = () => {
    getVideoCurrent()
  }

  /**
   * 获取时间
   */
  const getVideoCurrent = () => {
    timer = setInterval(() => {
      setCurrentTime(videoPlayer.current.currentTime)
    })
  }
  /**
   * 视频播放完成或暂停
   */
  const endedOrPause = () => {
    clearInterval(timer)
  }
  /**
   * 设置视频音量
   */
  const setVideoVolume = (volume: number) => {
    videoPlayer.current.volume = volume
  }
  /**
   * 设置视频播放速度
   */
  const setVideoSpeed = (speed: number) => {
    videoPlayer.current.playbackRate = speed
  }
  return (
    <div className="great-video-editor-container">
      <div className="great-video-editor-container-controlConsole">
        <div className="great-video-editor-container-controlConsole-playerContainer">
          <video ref={videoPlayer} src={source} onLoadedMetadata={loadedMetadata} onEnded={endedOrPause} onPlay={videoStarPlay}/>
        </div>
        <div className="great-video-editor-container-controlConsole-playControl">
          <div className="broadcastControl" style={{backgroundImage: `url(${state ? Pause : Play})`}} onClick={broadcastControl}></div>
          <div className="videoTime">
            <div className="time split">
              <div className="minute">{formatTime(currentTime).m} "</div>
              <div className="minute">{formatTime(currentTime).s} "</div>
              <div className="minute">{formatTime(currentTime).ms}</div>
            </div>
            <div className="time">
              <div className="minute">{formatTime(duration).m} "</div>
              <div className="minute">{formatTime(duration).s} "</div>
              <div className="minute">{formatTime(duration).ms}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="controlsSpace">
        <div className="controls">
          <div className="controlsContainer">
            {
              menus.map(menu => {
                return(
                  <div
                    className={
                      `${menu.className} ${selectedMenu === menu.mark ?
                        menu.selectedClassName :
                        menu.unselectedClassName}`
                    }
                    key={menu.mark}
                    aria-label={menu.ariaLabel}
                    onClick={() => setSelectedMenu(menu.mark as Selected_Menu)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="components">
          <div className="components-target">
            {selectedMenu === "volume" && <Volume setVideoVolume={setVideoVolume}></Volume>}
            {selectedMenu === "speed" && <Speed setVideoSpeed={setVideoSpeed}></Speed>}
          </div>
        </div>
      </div>
    </div>
  )
}
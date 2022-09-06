import React, {useEffect, useState} from "react"
import "./index.less"
import Clip from "@/components/Clip"
import { computedVideoInfo, VideoInfo } from "@/utils"
interface Props {
  source: string;

}
const ClipVideo = (props: Props) => {
  const { source } = props
  useEffect(() => {
    getVideoInfo()
  }, [])
  const getVideoInfo = async () => {
    const videoInfo = await computedVideoInfo(source)
    setVideoInfo(videoInfo)
  }
  const [videoInfo, setVideoInfo] = useState<VideoInfo>()
  const setStartTime = (startTime: number) => {
    console.log(startTime)
  }
  const setEndTime = (startTime: number) => {
    console.log(startTime)
  }
  return (
    <div className="control-clip-container">
      <Clip
        duration={videoInfo.duration}
        frameGap={5}
        startTime={0}
        endTime={videoInfo.duration}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        source={source}
        frameHeight={100}
      />
    </div>
  )
}

export default React.memo(ClipVideo)
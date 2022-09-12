import React, {useCallback, useEffect, useState} from "react"
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
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    duration: 0,
    width: 0,
    height: 0,
    volume: 1
  })
  const setStartTime = (startTime: number) => {
    console.log(startTime)
  }
  const setEndTime = (startTime: number) => {
    console.log(startTime)
  }
  const videoInfoCallback = useCallback(() => videoInfo, [videoInfo] )
  return (
    <div className="control-clip-container">
      <Clip
        duration={videoInfoCallback().duration}
        frameGap={5}
        startTime={0}
        endTime={videoInfoCallback().duration}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        source={source}
        frameHeight={60}
      />
    </div>
  )
}

export default React.memo(ClipVideo)
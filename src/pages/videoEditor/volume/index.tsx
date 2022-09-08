import React, {useCallback, useEffect, useRef, useState} from "react"
import "./index.less"
import VolumeMin from "@/assets/videoeditor/control-volume-min.svg"
import VolumeMax from "@/assets/videoeditor/control-volume-max.svg"
interface Props {
    mediaElem: HTMLMediaElement;
}
const Volume = (props: Props) => {
  const { mediaElem } = props
  const [ volume, setVolume ] = useState(50)
  const AudioRef = useRef(new AudioContext())
  const changeVolume: React.ChangeEventHandler<HTMLInputElement> = e => {
    setVolume(parseInt(e.target.value))
  }
  useEffect(() => {
    if (mediaElem === undefined) return
    AudioRef.current.createMediaElementSource(mediaElem)
    const data = AudioRef.current.createGain()
    console.log(data)
  }, [volume])

  const minOpacity = useCallback(() => {
    const opacity = 1-(volume/100)
    return opacity < .1 ? .1 : opacity
  }, [volume])
  const maxOpacity = useCallback(() => {
    const opacity = volume/100
    return opacity < .1 ? .1 : opacity
  }, [volume])
  return (
    <div className="control-volume-container">
      <div className="volume-control">
        <img src={VolumeMin} alt="音量小" style={{opacity: `${minOpacity()}`}} />
      </div>
      <input type="range" value={volume} onChange={changeVolume} className="control-volume-target" />
      <div className="volume-value">{volume * 2}%</div>
      <div className="volume-control">
        <img src={VolumeMax} alt="音量大" style={{opacity: `${maxOpacity()}`}} />
      </div>
    </div>
  )
}

export default React.memo(Volume)

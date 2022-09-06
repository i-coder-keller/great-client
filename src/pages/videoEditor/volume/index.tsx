import React, {useCallback, useState} from "react"
import "./index.less"
import VolumeMin from "@/assets/videoeditor/control-volume-min.svg"
import VolumeMax from "@/assets/videoeditor/control-volume-max.svg"
interface Props {
  setVideoVolume: (v: number) => void;
}
const Volume = (props: Props) => {
  const [ volume, setVolume ] = useState(100)
  const changeVolume: React.ChangeEventHandler<HTMLInputElement> = e => {
    setVolume(parseInt(e.target.value))
    props.setVideoVolume(parseInt(e.target.value) / 100)
  }
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
      <div className="volume-value">{volume}</div>
      <div className="volume-control">
        <img src={VolumeMax} alt="音量大" style={{opacity: `${maxOpacity()}`}} />
      </div>
    </div>
  )
}

export default React.memo(Volume)

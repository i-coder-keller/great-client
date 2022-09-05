import React from "react"
import "./index.less"
import VolumeMin from "@/assets/videoeditor/control-volume-min.svg"
import VolumeMax from "@/assets/videoeditor/control-volume-max.svg"
import { Slider } from "antd"
interface Props {
  setVideoVolume: (v: number) => void;
  Volume: number;
}
const Volume: React.FC = (props: Props) => {
  const { Volume, setVideoVolume } = props
  return (
    <div className="control-volume-container">
      <div className="volume-control">
        <img src={VolumeMin} alt="音量小" />
      </div>
      <input type="range" className="control-volume-target" />
      <div className="volume-value">52</div>
      <div className="volume-control">
        <img src={VolumeMax} alt="音量大" />
      </div>
    </div>
  )
}

export default React.memo(Volume)

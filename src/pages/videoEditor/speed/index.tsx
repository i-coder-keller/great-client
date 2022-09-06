import React, {useEffect, useRef, useState} from "react"
import "./index.less"
import SpeedMin from "@/assets/videoeditor/control-speed-min.svg"
import SpeedMax from "@/assets/videoeditor/control-speed-max.svg"
interface Props {
    setVideoSpeed: (speed: number) => void;
}
const Speed = (props: Props) => {
  const [speed, setSpeed] = useState<number>(1)
  const [value, setValue] = useState<number>(20)
  const container = useRef<HTMLDivElement>()
  useEffect(() => {
    computedOpacity()
    props.setVideoSpeed(speed)
  }, [value])
  const changeValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(parseInt(e.target.value))
  }
  const computedOpacity = () => {
    if (value === 20) {
      container.current.style.setProperty('--left', '.1')
      container.current.style.setProperty('--right', '.1')
      container.current.style.setProperty('--sliderBarWidth', '0')
      container.current.style.setProperty('--sliderBarLeft', '20%')
      setSpeed(1)
    } else if (value < 20) {
      const poor = Math.abs(value - 20)
      const val = 1 - Number((poor / 20).toFixed(2))
      setSpeed(Number((val * 0.75 + 0.25).toFixed(2)))
      container.current.style.setProperty('--sliderBarColor', '#c9e2fb')
      container.current.style.setProperty('--sliderBarWidth', `${poor}%`)
      container.current.style.setProperty('--sliderBarLeft', `${Math.abs(poor - 20)}%`)
      container.current.style.setProperty('--right', '.1')
      container.current.style.setProperty('--left', `${ 1 - val}`)
    } else if (value > 20) {
      const poor = Number(((value - 20) / 80).toFixed(2))
      setSpeed(Number((poor * 7 + 1).toFixed(2)))
      container.current.style.setProperty('--sliderBarColor', '#eb2f06')
      container.current.style.setProperty('--sliderBarWidth', `${value - 20}%`)
      container.current.style.setProperty('--sliderBarLeft', '20%')
      container.current.style.setProperty('--left', '.1')
      container.current.style.setProperty('--right', `${poor}`)
    }
  }
  return (
    <div className="control-volume-container" ref={container}>
      <div className="volume-control">
        <img src={SpeedMin} alt="倍速小" style={{opacity: "var(--left)"}}/>
      </div>
      <input type="range" value={value} onChange={changeValue} onInput={changeValue} className="control-volume-target" />
      <div className="volume-value">{speed}x</div>
      <div className="volume-control">
        <img src={SpeedMax} alt="倍速大" style={{opacity: "var(--right)"}} />
      </div>
    </div>
  )
}

export default React.memo(Speed)
import React from "react"
import "./index.less"
interface Props {
    value: number;
    progressColor: string;
    activateColor: string;
}
const Progress = (props: Props) => {
  const { progressColor, activateColor, value } = props
  return (
    <div className="progress-container">
      <div className="progress-container-base" style={{backgroundColor: progressColor}}>
        <div className="progress-container-value" style={{backgroundColor: activateColor, width: value + "%"}}></div>
      </div>
    </div>
  )
}

export default React.memo(Progress)

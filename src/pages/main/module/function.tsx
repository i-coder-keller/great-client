import React from "react"
import {useNavigate} from "react-router-dom"
interface Props {
    icon: string;
    name: string;
    path: string;
}
export default (props: Props) => {
  const navigate = useNavigate()
  const goFunction = () => {
    navigate(props.path)
  }
  return (
    <div className="main-cards-container-item" onClick={goFunction}>
      <div className="main-cards-container-item-icon" style={{ backgroundImage: `url(${props.icon})` }}></div>
      <div className="main-cards-container-item-title">
        {props.name}
      </div>
    </div>
  )
}
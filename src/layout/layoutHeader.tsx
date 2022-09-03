import React from "react"
import { useNavigate } from "react-router-dom"
export default () => {
  const navigate = useNavigate()
  return (
    <header className="great-layout-header">
      <div className="great-layout-header-container">
        <div className="great-layout-header-container-logo" onClick={() => navigate("/")}></div>
        <div className="great-layout-header-container-buttonGroup">
          <button className="great-layout-header-container-buttonGroup-tellMe">联 系 我</button>
        </div>
      </div>
    </header>
  )
}

import React from "react"
import { cards } from "./cards"
import FunctionCom from './module/function'
import "./card.less"
export default () => {

  return (
    <div className='main-cards-container'>
      {
        cards.map(curd => <FunctionCom
          key={curd.path}
          path={curd.path}
          name={curd.name}
          icon={curd.icon}
          showUpload={curd.showUpload}
          accept={curd.accept}
          multiple={curd.multiple}
          validate={curd.validate}
        />)
      }
    </div>
  )
}

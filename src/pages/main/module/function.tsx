import React from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    icon: string;
    name: string;
    path: string;
    showUpload: boolean;
    multiple?: boolean;
    accept?: string;
    validate?: (file: File) => Promise<boolean>;
}
export default (props: Props) => {
  const navigate = useNavigate()
  const goFunction = () => {
    navigate(props.path)
  }
  const fileChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const s = await props.validate(e.target.files[0])
    if (s) {
      goFunction()
    } else {
      alert('文件格式不正确')
    }
  }
  return (
    <div className="main-cards-container-item">
      <div className="main-cards-container-item-icon" style={{ backgroundImage: `url(${props.icon})` }}></div>
      <div className="main-cards-container-item-title">
        {props.name}
      </div>
      {
        props.showUpload && <input
          type="file"
          className="main-cards-container-item-upload"
          accept={props.accept}
          multiple={props.multiple}
          onChange={fileChange}
        />
      }
    </div>
  )
}
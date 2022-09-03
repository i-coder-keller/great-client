import React from "react"
import { useNavigate } from "react-router-dom"
import Toastify from 'toastify-js'

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
    if(s) {
      console.log(s)
      Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast()
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
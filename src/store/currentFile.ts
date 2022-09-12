import { atom } from "recoil"

const currentFile = atom({
  key: "currentFile",
  default: {
    url: "",
    data: new Blob([]),
    frames: []
  }
})

export default currentFile
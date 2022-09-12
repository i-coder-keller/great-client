import {Frame, videoParseFrame} from "@/utils"

export const initFrame = async (source:string, duration: number, hander: (frame: Frame) => void) => {
  const total = Math.ceil(duration / 5)
  for (let i = 0; i < total; i++) {
    const frame = await videoParseFrame(source, i*5)
    hander(frame)
  }
}
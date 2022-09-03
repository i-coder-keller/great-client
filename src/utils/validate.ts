import { fileTypeFromBuffer } from "file-type"
import { file2Type } from './index'
const videoMimeTypes = ["video/mp4", "video/webm", "video/ogg"]
export const videoAccept = ".webm,.mp4,.ogg"

/**
 * 校验视频是否符合格式
 * @param file
 */
export const validateVideo = async (file: File) => {
  const arrayBuffer = await file2Type(file, "ArrayBuffer")
  const typeInfo = await fileTypeFromBuffer(arrayBuffer)
  return videoMimeTypes.includes(typeInfo.mime)
}

/**
 * 校验数据类型
 * @param variable
 */
export const validateVariableType = (variable: any): string => {
  return Object.prototype.toString.call(variable).match(/\[object (.*?)]/)[1].toLowerCase()
}
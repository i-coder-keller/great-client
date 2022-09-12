interface ResultType {
  "Blob": Blob,
  "ArrayBuffer": ArrayBuffer,
}

export interface VideoInfo {
  width: number;
  height: number;
  volume: number;
  duration: number;
}

interface TimeFormat {
  m: string;
  s: string;
  ms: string;
}

export interface Frame {
  image: string;
  s: number;
}

/**
 * 文件转Blog、ArrayBuffer
 * @param file { File }
 * @param type { "Blob" | "ArrayBuffer" }
 */
export const file2Type = <T extends keyof ResultType>(file: File, type: T): Promise<ResultType[T] | never> => {
  return new Promise(resolve => {
    const fileRead = new FileReader()
    fileRead.onload = e => {
      const result = e.target.result
      if (typeof result !== "string") {
        if (type === "ArrayBuffer") {
          const result = e.target.result as ResultType[T]
          resolve(result)
        }
        if (type === "Blob") {
          const blob = new Blob([result]) as ResultType[T]
          resolve(blob)
        }
      } else {
        throw new Error('file to string!')
      }
    }
    fileRead.onerror = e => {
      throw new Error(JSON.stringify(e))
    }
    fileRead.readAsArrayBuffer(file)
  })
}

/**
 * 计算视频信息
 * @param source { string }
 */
export const computedVideoInfo = (source: string): Promise<VideoInfo> => new Promise((resolve, reject) => {
  const video = document.createElement('video')
  video.setAttribute("src", source)
  video.addEventListener("loadedmetadata", () => {
    resolve({
      width: video.videoWidth,
      height: video.videoHeight,
      duration: video.duration,
      volume: video.volume,
    })
  })
  video.addEventListener("error", evt => {
    reject(evt)
  })
})
/**
 * 格式化时长
 * @param second
 */
export const formatTime = (second: number): TimeFormat => {
  const poor = Math.floor(Number((second % 1).toFixed(3)) * 1000)
  const ms = poor < 10 ? `00${poor}`: poor < 100 ? `0${poor}` : `${poor}`
  const s = `${Math.floor(second % 60) < 10 ? `0${Math.floor(second % 60)}` : Math.floor(second % 60)}`
  const m = `${Math.floor(second / 60) < 10 ? `0${Math.floor(second / 60)}` : Math.floor(second / 60)}`
  return {
    m,
    s,
    ms
  }
}

/**
 * 视频解析帧图
 * @param url {string}
 * @param s {number}
 */
export const videoParseFrame = (url: string, s: number): Promise<Frame> => {
  const video = document.createElement('video')
  video.setAttribute("src", url)
  video.currentTime = s
  return new Promise(resolve => {
    video.addEventListener('loadeddata',() => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
      const image = canvas.toDataURL('image/jpeg')
      resolve({image, s})
    })
  })
}
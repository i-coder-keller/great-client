interface ResultType {
  "Blob": Blob,
  "ArrayBuffer": ArrayBuffer,
}

/**
 * 文件转Blog、ArrayBuffer
 * @param file
 * @param type
 */
export const file2Type = <T extends keyof ResultType>(file: File, type: T): Promise<[ResultType[T], unknown ]> => {
  return new Promise(resolve => {
    const fileRead = new FileReader()
    fileRead.onload = e => {
      const result = e.target.result
      if (typeof result !== "string") {
        if (type === "ArrayBuffer") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resolve([result, null])
        }
        if (type === "Blob") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resolve([new Blob([result]), null])
        }
      } else {
        resolve([null, 'file to string!'])
      }
    }
    fileRead.onerror = e => {
      resolve([null, e])
    }
    fileRead.readAsArrayBuffer(file)
  })
}
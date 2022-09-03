interface ResultType {
  "Blob": Blob,
  "ArrayBuffer": ArrayBuffer,
}

/**
 * 文件转Blog、ArrayBuffer
 * @param file
 * @param type
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
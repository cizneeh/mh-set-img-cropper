import { useRef, useState } from 'react'

export const FileComp = () => {
  const [url, setUrl] = useState<string>('')
  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.item(0) //FileListオブジェクトを取得
    if (!file) return
    console.log(file)
    const url = URL.createObjectURL(file) //FileオブジェクトからURLを生成
    setUrl(url)
  }

  return (
    <>
      <input onChange={onChange} type="file" />
      <img src={url} alt="alt dayo" />
    </>
  )
}

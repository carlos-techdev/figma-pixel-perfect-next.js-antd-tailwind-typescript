import { PlusOutlined } from "@ant-design/icons"
import { Input, Tag } from "antd"
import React, { useState } from "react"

interface TagInputProps {
  initVals: string[]
  addAble?: boolean
}

const TagInput = ({ initVals, addAble = false }: TagInputProps) => {
  const [tags, setTags] = useState<string[]>(initVals)
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleClose = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag))
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue("")
  }

  const showNewInput = () => {
    if (inputVisible) {
      return (
        <Input
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )
    } else {
      return (
        <Tag onClick={showInput} style={{ background: "#fff", borderStyle: "dashed" }}>
          <PlusOutlined /> New Tag
        </Tag>
      )
    }
  }

  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag} closable onClose={() => handleClose(tag)}>
          {tag}
        </Tag>
      ))}
      {addAble ? showNewInput() : <></>}
    </>
  )
}

export default TagInput

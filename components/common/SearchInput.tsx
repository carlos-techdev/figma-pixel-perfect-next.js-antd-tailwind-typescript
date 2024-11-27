"use client"

import { Input } from "antd"
import React, { useContext } from "react"
import MyIcon from "components/icon"
import { HeaderContext } from "context/main"

export default function SearchInput() {
  const { setSearch } = useContext(HeaderContext)

  return (
    <div>
      <Input
        size="large"
        placeholder="Search"
        prefix={<MyIcon type="magnifying" />}
        suffix={
          <div className="flex items-center space-x-2">
            <MyIcon type="command" />
            <MyIcon type="f" />
          </div>
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
    </div>
  )
}

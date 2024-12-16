import { UserOutlined } from "@ant-design/icons"
import { Avatar, Select, Spin } from "antd"
import type { SelectProps } from "antd"
import debounce from "lodash/debounce"
import React, { ReactNode, useMemo, useRef, useState } from "react"
import MyIcon from "./icon"

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>
  debounceTimeout?: number
}

function DebounceSelect<ValueType extends { key?: string; label: ReactNode; value: string | number } = any>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<ValueType[]>([])
  const fetchRef = useRef(0)

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }

        setOptions(newOptions)
        setFetching(false)
      })
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  )
}

// Usage of DebounceSelect
interface UserValue {
  label: string
  value: string
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log("fetching user", username)

  return fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((body: any) =>
      body.results.map((user: { name: { first: string; last: string }; login: { username: string } }) => ({
        label: (
          <div className="flex items-center space-x-2">
            <Avatar icon={<UserOutlined />} size={24} />
            <p className="text-[16px] font-semibold leading-[22px] text-[#475569]">
              {user.name.first} {user.name.last}
            </p>
          </div>
        ),
        value: user.login.username,
      }))
    )
}

const SearchSelect = () => {
  const [value, setValue] = useState<UserValue[]>([])

  return (
    <div className="flex items-center rounded border">
      <div className="pl-4">
        <MyIcon type="gray_user" />
      </div>
      <DebounceSelect
        suffixIcon={null}
        className="h-12 w-full overflow-y-auto overflow-x-hidden"
        mode="multiple"
        value={value}
        placeholder="Assign to user"
        variant="borderless"
        fetchOptions={fetchUserList}
        onChange={(newValue) => {
          setValue(newValue as UserValue[])
        }}
      />
    </div>
  )
}

export default SearchSelect

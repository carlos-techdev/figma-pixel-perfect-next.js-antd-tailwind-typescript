import { Input } from "antd"
import MyIcon from "components/icon"

export default function MyInput() {
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
      />
    </div>
  )
}

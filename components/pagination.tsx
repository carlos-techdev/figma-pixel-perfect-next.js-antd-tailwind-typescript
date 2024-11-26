import { Pagination, Select } from "antd"
import { useState } from "react"

const options = [
  {
    value: 10,
    label: <p>10</p>,
  },
  {
    value: 20,
    label: <p>20</p>,
  },
  {
    value: 50,
    label: <p>50</p>,
  },
]

export default function MyPagination() {
  const [pageSize, setPageSize] = useState(10)

  const handleSelect = (val: any) => {
    setPageSize(val)
  }

  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center space-x-3">
        <p className="text-[12px] font-medium leading-[17px]">Show</p>
        <Select value={pageSize} onChange={handleSelect} className="w-16" options={options} />
        <p className="text-[12px] font-medium leading-[17px]">Row</p>
      </div>
      <Pagination defaultCurrent={1} total={50} pageSize={pageSize} />
    </div>
  )
}

import { Select } from "antd"
import type { TableColumnsType } from "antd"
import { MyTable } from "components/table"

const options = [
  {
    value: "1",
    label: <p>Last 7 days</p>,
  },
]

interface DataType {
  key: React.Key
  name: string
  visitors: string
  unique: string
  bounce: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "/home",
    visitors: "7,874",
    unique: "6,784",
    bounce: "19%",
  },
  {
    key: "2",
    name: "/home",
    visitors: "7,874",
    unique: "6,784",
    bounce: "19%",
  },
  {
    key: "3",
    name: "/home",
    visitors: "7,874",
    unique: "6,784",
    bounce: "19%",
  },
  {
    key: "4",
    name: "/home",
    visitors: "7,874",
    unique: "6,784",
    bounce: "19%",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Page name",
    dataIndex: "name",
    key: "name",
    render: (source: any) => <p className="text-[14px] leading-[22px] text-[#454a54]">{source}</p>,
  },
  {
    title: "Visitors",
    dataIndex: "visitors",
    key: "visitors",
    render: (source: any) => <p className="text-[14px] leading-[22px] text-[#454a54]">{source}</p>,
  },

  {
    title: "Unique page visits",
    dataIndex: "unique",
    key: "unique",
    align: "right",
    responsive: ["sm"],
    render: (source: any) => <p className="text-[14px] font-bold leading-[22px] text-[#454a54]">{source}</p>,
  },
  {
    title: "Bounce rate",
    dataIndex: "bounce",
    key: "bounce",
    align: "right",
    responsive: ["md"],
    render: (source: any) => <p className="pr-6 text-[14px] font-bold leading-[22px] text-[#454a54]">{source}</p>,
  },
]

export default function Visit() {
  return (
    <div className="rounded-xl border">
      <div className="flex justify-between px-6 pb-4 pt-6">
        <div className="space-y-1.5">
          <p className="text-[20px] font-bold leading-6 text-[#2e3138]">Most visited pages</p>
          <p>Analyze the popular pages in your website</p>
        </div>
        <Select defaultValue="1" className="h-10 w-[129px]" options={options} />
      </div>
      <MyTable bordered={false} size="large" columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

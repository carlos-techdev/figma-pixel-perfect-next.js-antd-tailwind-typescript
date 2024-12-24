import { Button, Input, Select } from "antd"
import type { TableColumnsType } from "antd"
import { btn_group } from "components/button"
import MyIcon from "components/icon"
import { MyBlackTable } from "components/table"

const status_options = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Deactive",
  },
]

interface DataType {
  key: React.Key
  name: string
  amount: string
  price: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "start at",
    amount: "1222",
    price: "$22",
    action: "",
  },
  {
    key: "2",
    name: "start at",
    amount: "1222",
    price: "$22",
    action: "",
  },
  {
    key: "3",
    name: "start at",
    amount: "1222",
    price: "$22",
    action: "",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Datasets Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "Credits amount",
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) => a.amount.localeCompare(b.amount),
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "Records Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price.localeCompare(b.price),
    render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div className="flex items-center space-x-2.5">
        <MyIcon type="edit" />
        <MyIcon type="trash_1" />
      </div>
    ),
  },
]

export default function Info() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Credit Add-on</p>
          <p className="text-base text-[#666d80]">Update credit add-on details</p>
        </div>
        {btn_group}
      </div>
      <div className="text-base font-medium text-[#666d80]">
        <div className="space-y-6 border-b py-6">
          <div className="grid sm:grid-cols-2">
            <div>Package name</div>
            <Input defaultValue="Enrichment Credits" className="h-12" />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Type</div>
            <Input defaultValue="Addon" className="h-12" />
          </div>
        </div>
        <div className="mt-[31px] grid sm:grid-cols-2">
          <div>Status</div>
          <Select className="h-12 w-full" defaultValue="1" options={status_options} />
        </div>
      </div>
      <div className="mt-[31px] flex justify-between gap-4">
        <p className="text-base font-medium text-[#666d80]">Pricing</p>
        <div className="lg:w-[778px]">
          <MyBlackTable columns={columns} dataSource={data} pagination={false} size="middle" />
          <div className="mt-[73px] text-[16px] font-bold leading-[19.2px] text-[#333333]">Pricing</div>
          <div className="mt-[30px] flex justify-between">
            <p className="text-base font-medium text-[#666d80]">Credit Amount</p>
            <Input defaultValue="Advanced Webdata" className="h-12" />
          </div>
          <div className="mt-[30px] flex justify-between">
            <p className="text-base font-medium text-[#666d80]">Price per credit</p>
            <Input defaultValue="0.025" className="h-12" />
          </div>
          <div className="mt-10 text-right">
            <Button className="h-10 w-[140px] bg-black text-[12px] font-semibold leading-[18px] text-white">
              Insert Pricing Level
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

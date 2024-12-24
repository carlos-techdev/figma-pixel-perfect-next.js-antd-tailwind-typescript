import { Button, Input } from "antd"
import type { TableColumnsType } from "antd"
import { btn_group } from "components/button"
import MyIcon from "components/icon"
import { MyTable } from "components/table"
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
    name: "Linkedin B2B",
    amount: "15,000",
    price: "$0.05",
    action: "",
  },
  {
    key: "2",
    name: "Linkedin B2B",
    amount: "15,000",
    price: "$0.05",
    action: "",
  },
  {
    key: "1",
    name: "Linkedin B2B",
    amount: "15,000",
    price: "$0.05",
    action: "",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Package Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "Records amount",
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
    responsive: ["xl"],
    render: () => (
      <div className="flex items-center space-x-2.5">
        <MyIcon type="edit" />
        <MyIcon type="trash_1" />
      </div>
    ),
  },
]

export default function Pricing() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Pricing</p>
          <p className="text-base text-[#666d80]">Update dataset details</p>
        </div>
        {btn_group}
      </div>
      <div className="max-w-[780px]">
        <MyTable columns={columns} dataSource={data} pagination={false} size="middle" />
        <div className="mt-[73px] text-[16px] leading-[18px] text-[#333333]">Pricing</div>
        <div className="mt-[30px] flex">
          <div className="w-[460px] text-base font-medium text-[#666d80]">Records Amount</div>
          <div>
            <Input defaultValue="15,000" className="h-12 w-[309px]" />
          </div>
        </div>
        <div className="mt-[31px] flex">
          <div className="w-[460px] text-base font-medium text-[#666d80]">Price per record</div>
          <div>
            <Input defaultValue="0.025" className="h-12 w-[309px]" />
          </div>
        </div>
        <div className="mt-[31px] text-center">
          <Button className="h-10 w-[130px] bg-black text-[12px] font-semibold leading-[18px] text-white">
            Insert Pricing Level
          </Button>
        </div>
        <div className="mt-[50px] flex">
          <div className="w-[460px] text-base font-medium text-[#666d80]">Minimum Order Limits</div>
          <div>
            <Input defaultValue="$500" className="h-12 w-[309px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

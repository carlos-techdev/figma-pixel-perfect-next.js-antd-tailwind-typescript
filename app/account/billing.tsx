import { Button } from "antd"
import type { TableColumnsType } from "antd"
import MyIcon from "components/icon"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  invoice: string
  date: string
  amount: string
  download: string
  payment: string
  status: string
}

const data: DataType[] = [
  {
    key: "1",
    invoice: "INV-2052",
    date: "Feb 5, 2023",
    amount: "$123.79",
    download: "PDF",
    payment: "Crypto",
    status: "Canceled",
  },
  {
    key: "2",
    invoice: "INV-2052",
    date: "Feb 5, 2023",
    amount: "$123.79",
    download: "PDF",
    payment: "Wire Transfer",
    status: "Awaiting Payment",
  },
  {
    key: "3",
    invoice: "INV-2052",
    date: "Feb 5, 2023",
    amount: "$123.79",
    download: "PDF",
    payment: "Card",
    status: "Paid",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Invoice",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    responsive: ["sm"],
  },
  {
    title: "Invoice",
    dataIndex: "download",
    key: "download",
    responsive: ["md"],
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <MyIcon type="download" />
        <p>{source}</p>
      </div>
    ),
  },
  {
    title: "Payment Method",
    dataIndex: "payment",
    key: "payment",
    responsive: ["lg"],
    render: (source: any) => {
      let icon
      switch (source) {
        case "Crypto":
          icon = <MyIcon type="crypto" />
          break
        case "Wire Transfer":
          icon = <MyIcon type="wire" className="self-stretch" />
          break
        case "Card":
          icon = <MyIcon type="card" />
          break
        default:
      }
      return (
        <div className="flex items-center space-x-2">
          {icon}
          <p>{source}</p>
        </div>
      )
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
    render: (source: any) => {
      let className
      switch (source) {
        case "Canceled":
          className = "bg-red-100 text-red-400"
          break
        case "Paid":
          className = "bg-green-100 text-green-700"
          break
        case "Awaiting Payment":
          className = "bg-orange-100 text-orange-500"
          break
        default:
      }
      return <span className={`${className} rounded p-1 text-center`}>{source}</span>
    },
  },
]

export default function Billing() {
  return (
    <div>
      <div className="pb-2">
        <p className="text-[20px] font-semibold leading-[27px]">Billing</p>
        <p className="text-base text-[#666d80]">Manage your billing and payment details</p>
      </div>
      <div className="flex justify-between border-y py-2">
        <p className="text-base font-medium text-[#666d80]">Billing plan</p>
        <div className="w-2/3 rounded-lg border p-2">
          <div className="flex items-center justify-between pb-2">
            <p className="text-base font-semibold">Starter Plain</p>
            <div className="space-x-2">
              <Button>Cancel Plan</Button>
              <Button className="bg-black text-white">Switch Plan</Button>
            </div>
          </div>
          <div className="space-y-2 border-t-2">
            <div>
              <span className="text-[32px] font-semibold leading-10">$20</span>
              <span className="text-[14px] leading-[21px] text-[#666d80]">/per month</span>
            </div>
            <div className="text-[14px] leading-[21px] text-[#666d80]">Package Short Descriptions</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-base font-medium text-[#666d80]">Billing History</p>
        <div className="w-2/3">
          <MyTable size="middle" columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  )
}

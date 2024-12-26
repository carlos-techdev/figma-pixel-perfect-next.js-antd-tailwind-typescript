"use client"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import type { TableColumnsType } from "antd"
import { useRouter } from "next/navigation"
import BoxComponent from "components/dash_box"
import MyIcon from "components/icon"
import MyInput from "components/input"
import { MyTable } from "components/table"
import { getStatusClass, getStatusString, InvoiceStatus } from "constant/Admin/Invoice"
interface DataType {
  key: React.Key
  customer_name: string
  products_name: string
  issued_date: string
  status: InvoiceStatus
  payment_method: string
  amount: string
  action: string
}
const data: DataType[] = [
  {
    key: "1",
    customer_name: "Robert Fox",
    products_name: "Growth Plan",
    issued_date: "22/03/2025",
    status: InvoiceStatus.PAID,
    payment_method: "Credit Card",
    amount: "$25.5",
    action: "",
  },
  {
    key: "2",
    customer_name: "Cody Fisher",
    products_name: "Realtor Dataset",
    issued_date: "22/03/2025",
    status: InvoiceStatus.CANCELED,
    payment_method: "Wire Transfer",
    amount: "$15,000",
    action: "",
  },
  {
    key: "3",
    customer_name: "Robert Fox",
    products_name: "Google Map Dataset",
    issued_date: "22/03/2025",
    status: InvoiceStatus.AWAITING,
    payment_method: "Credit Card",
    amount: "$25.5",
    action: "",
  },
  {
    key: "4",
    customer_name: "Robert Fox",
    products_name: "Ultimate Plan",
    issued_date: "22/03/2025",
    status: InvoiceStatus.NEW,
    payment_method: "Credit Card",
    amount: "$25.5",
    action: "",
  },
  {
    key: "5",
    customer_name: "Robert Fox",
    products_name: "LinkedIn Dataset",
    issued_date: "22/03/2025",
    status: InvoiceStatus.FAILED,
    payment_method: "Credit Card",
    amount: "$25.5",
    action: "",
  },
]
const columns: TableColumnsType<DataType> = [
  {
    title: "Customer Name",
    dataIndex: "customer_name",
    key: "customer_name",
    sorter: (a, b) => a.customer_name.localeCompare(b.customer_name),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <Avatar size={24} icon={<UserOutlined />} />
        <p className="font-semibold">{source}</p>
      </div>
    ),
  },
  {
    title: "Products Name",
    dataIndex: "products_name",
    key: "products_name",
    sorter: (a, b) => a.products_name.localeCompare(b.products_name),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <p className="font-semibold">{source}</p>
      </div>
    ),
  },
  {
    title: "Issued Date",
    dataIndex: "issued_date",
    key: "issued_date",
    sorter: (a, b) => a.issued_date.localeCompare(b.issued_date),
    responsive: ["sm"],
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <p className="">{source}</p>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => (a > b ? 1 : 0),
    responsive: ["lg"],
    render: (source: InvoiceStatus) => (
      <span className={`rounded bg-[#EDF2FE] p-1 text-center text-green-600 ${getStatusClass(source)}`}>
        {getStatusString(source)}
      </span>
    ),
  },
  {
    title: "Payment Method",
    dataIndex: "payment_method",
    key: "payment_method",
    sorter: (a, b) => a.payment_method.localeCompare(b.payment_method),
    responsive: ["lg"],
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <p className="font-normal">{source}</p>
      </div>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) => a.amount.localeCompare(b.amount),
    responsive: ["xl"],
  },
  {
    title: "Action",
    key: "action",
    responsive: ["xl"],
    render: () => (
      <div className="flex items-center space-x-1">
        <span className="cursor-pointer"><MyIcon type="edit_user" /></span>
        <span className="cursor-pointer"><MyIcon type="trash_1" /></span>
      </div>
    ),
  },
]
export default function InvoiceIndex() {
  const router = useRouter()

  const addInvoice = () => {
    router.push("/admin/invoice/new")
  }

  return (
    <>
      <div className="p-l-[12px] h-[69px] w-full border-y-[1px] border-[rgb(229,231,235)] py-[20px] text-[24px] font-bold leading-[120%] tracking-[0%]">
        Invoices
      </div>
      {/* Box */}
      <div className="mt-[14px] flex justify-between gap-2 pr-[20px]">
        <BoxComponent className="flex-1" icon="envelope" title="Total Invoices" value="585" />
        <BoxComponent className="flex-1" icon="briefcase" title="Paid Invoices" value="500" />
        <BoxComponent className="flex-1" icon="contact" title="Awaiting Payments Invoices" value="80" />
        <BoxComponent className="flex-1" icon="contact" title="Canceled/Failed Invoices" value="8" />
      </div>
      <div className="my-[14px] flex h-[61px] justify-between border-b border-solid border-[rgb(229,231,235)] pr-[32px]">
        <div className="w-[306px]">
          <MyInput />
        </div>
        <div className="flex h-[37px] w-[245px] justify-between">
          <Button className="h-[37px]">
            <div className="flex items-center space-x-2">
              <MyIcon type="sort" />
              <span>Filter</span>
            </div>
          </Button>
          <div className=" w-[1px] border-l-[1px] border-solid border-gray-300"></div>
          <Button onClick={addInvoice} className="h-[37px] bg-black text-white">
            + New Invoice
          </Button>
        </div>
      </div>
      {/* Tables */}
      <div>
        <MyTable columns={columns} dataSource={data} pagination={false} />
      </div>
    </>
  )
}

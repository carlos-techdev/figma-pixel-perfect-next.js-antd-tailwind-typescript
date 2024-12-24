import { PlusOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from "antd"
import type { TableColumnsType } from "antd"
import { useRouter } from "next/navigation"
import { useState } from "react"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"

const { TextArea } = Input

interface DataType {
  key: React.Key
  name: string
  enrichment: string
  scraping: string
  status: string
  type: string
  price: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Free",
    enrichment: "15,000",
    scraping: "15,000",
    status: "Active",
    type: "Subscription",
    price: "$0",
    action: "",
  },
  {
    key: "2",
    name: "Free",
    enrichment: "15,000",
    scraping: "15,000",
    status: "Active",
    type: "Subscription",
    price: "$0",
    action: "",
  },
  {
    key: "3",
    name: "Free",
    enrichment: "15,000",
    scraping: "15,000",
    status: "Active",
    type: "Subscription",
    price: "$0",
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
    title: "Enrichment Credits",
    dataIndex: "enrichment",
    key: "enrichment",
    sorter: (a, b) => a.enrichment.localeCompare(b.enrichment),
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "Scraping Credits",
    dataIndex: "scraping",
    key: "scraping",
    sorter: (a, b) => a.scraping.localeCompare(b.scraping),
    render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    responsive: ["md"],
    render: (source) => {
      let className
      switch (source) {
        case "Active":
          className = "bg-[#edf2fe] text-[#589e67]"
          break
        default:
      }
      return (
        <span className={`${className} rounded px-1.5 py-1 text-[12px] font-medium leading-[16.8px]`}>{source}</span>
      )
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.localeCompare(b.type),
    render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Price",
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
        <span className='cursor-pointer'><MyIcon type="edit" /></span>
        <span className='cursor-pointer'><MyIcon type="trash_1" /></span>
      </div>
    ),
  },
]
export default function CreditTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const editPackage = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const createPackage = () => {
    router.push("/admin/subscription/create_package")
  }

  return (
    <div>
      <div className="mr-[25px] mt-[25.5px] border-b border-[#e4e4e4] pb-[7.5px]">
        <div className="flex flex-row-reverse pr-8">
          <Button className="h-[37px] bg-black text-white">
            <div className="flex items-center space-x-2 px-3">
              <PlusOutlined />
              <p className="text-[14px] leading-[21px]" onClick={createPackage}>
                Create Package
              </p>
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-[9px] pl-3.5 pr-[46px]">
        <MyTable columns={columns} dataSource={data} pagination={false} size="middle" />
        <Button
          className="mt-5 h-[45px] w-[177px] text-[12px] font-semibold leading-[18px] text-[#0d0d12]"
          onClick={editPackage}
        >
          Edit Package Page
        </Button>
      </div>
      <div className="mt-1.5 flex justify-center">
        <MyPagination />
      </div>
      <Modal
        centered
        title={<p className="text-[18px] font-medium leading-[21.78px]">Edit Pricing Page</p>}
        open={isModalOpen}
        width={560}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-6">
          <p className="text-[14px] leading-[21px]">Title</p>
          <Input defaultValue="Scalabel Plans" className="mt-2" />
          <p className="mt-5 text-[14px] leading-[21px]">Sub title</p>
          <TextArea className="mt-2 h-[124px]" maxLength={100} showCount defaultValue="frfr" />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button className="h-10 w-full text-base font-medium" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="h-10 w-full bg-black text-base font-medium text-white" onClick={handleOk}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import type { TableColumnsType } from "antd"
import { useRouter } from "next/navigation"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"
interface DataType {
  key: React.Key
  name: string
  records: string
  fields: string
  status: string
  type: string
  start: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Linkedin B2B",
    records: "15,000",
    fields: "15,000",
    status: "Active",
    type: "Dataset",
    start: "$0",
    action: "",
  },
  {
    key: "2",
    name: "Linkedin B2B",
    records: "15,000",
    fields: "15,000",
    status: "Active",
    type: "Dataset",
    start: "$0",
    action: "",
  },
  {
    key: "3",
    name: "Linkedin B2B",
    records: "15,000",
    fields: "15,000",
    status: "Active",
    type: "Dataset",
    start: "$0",
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
    title: "Records",
    dataIndex: "records",
    key: "records",
    sorter: (a, b) => a.records.localeCompare(b.records),
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "fields",
    dataIndex: "fields",
    key: "fields",
    sorter: (a, b) => a.fields.localeCompare(b.fields),
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
    title: "Starts at",
    dataIndex: "start",
    key: "start",
    sorter: (a, b) => a.start.localeCompare(b.start),
    render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Action",
    key: "action",
    responsive: ["xl"],
    render: () => (
      <div className="flex items-center space-x-2.5">
        <span className="cursor-pointer">
          <MyIcon type="edit" />
        </span>
        <span className="cursor-pointer">
          <MyIcon type="trash_1" />
        </span>
      </div>
    ),
  },
]

export default function DatasetTable() {
  const router = useRouter()

  const createDataset = () => {
    router.push("/admin/subscription/create_dataset")
  }

  return (
    <div>
      <div className="mr-[35px] mt-5 border-b border-[#e4e4e4] pb-[7.5px]">
        <div className="flex flex-row-reverse pr-8">
          <Button className="h-[37px] bg-black text-white" onClick={createDataset}>
            <div className="flex items-center space-x-2 px-3">
              <PlusOutlined />
              <p className="text-[14px] leading-[21px]">Create Dataset</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-[18px] pl-1 pr-[56px]">
        <MyTable columns={columns} dataSource={data} pagination={false} size="middle" />
      </div>
      <div className="mt-[41px] flex justify-center">
        <MyPagination />
      </div>
    </div>
  )
}

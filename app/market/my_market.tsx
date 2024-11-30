import type { TableColumnsType } from "antd"
import MyIcon from "components/icon"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  date: string
  records: string
  status: string
  spent: string
  download: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Data Tesla List",
    date: "22/01/2024",
    records: "500",
    status: "Deliver",
    spent: "$25.5",
    download: "Download Dataset",
  },
  {
    key: "2",
    name: "Data Tesla List",
    date: "22/01/2024",
    records: "500",
    status: "in Progress",
    spent: "$25.5",
    download: "Download Dataset",
  },
  {
    key: "3",
    name: "Data Tesla List",
    date: "22/01/2024",
    records: "500",
    status: "Awaiting Payment",
    spent: "$25.5",
    download: "Download Dataset",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Dataset Name",
    dataIndex: "name",
    key: "name",
    render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
  },
  {
    title: "Issued Date",
    dataIndex: "date",
    key: "date",
    render: (source) => <p className="text-[14px] font-medium leading-[21px]">{source}</p>,
  },

  {
    title: "Records",
    dataIndex: "records",
    key: "records",
    responsive: ["sm"],
    render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    responsive: ["md"],
    render: (source: any) => {
      let className
      switch (source) {
        case "Deliver":
          className = "bg-[#f4edf7] text-[#589e67]"
          break
        case "in Progress":
          className = "bg-[#edf2fe] text-[#4976f4]"
          break
        case "Awaiting Payment":
          className = "bg-[#f4edf7] text-[#d28e3d]"
          break
        default:
      }
      return (
        <span className={`${className} rounded-[4px] px-1.5 py-1 text-center text-[12px] font-medium leading-[17px]`}>
          {source}
        </span>
      )
    },
  },
  {
    title: "Spent",
    dataIndex: "spent",
    key: "spent",
    responsive: ["lg"],
    render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
  },
  {
    title: "Download",
    dataIndex: "download",
    key: "download",
    responsive: ["xl"],
    render: (source: any) => (
      <div className="flex cursor-pointer items-center space-x-2">
        <MyIcon type="download" />
        <p className="text-[12px] font-medium leading-[16.8px]">{source}</p>
      </div>
    ),
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
}

export default function MyMarket() {
  return (
    <div className="mt-2 px-2 md:pr-12 lg:pr-20 xl:pr-32">
      <MyTable
        size="middle"
        columns={columns}
        dataSource={data}
        pagination={false}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </div>
  )
}

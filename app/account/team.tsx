import { UserAddOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button } from "antd"
import type { TableColumnsType } from "antd"
import MyIcon from "components/icon"
import MyInput from "components/input"
import { MyBlackTable } from "components/table"
interface DataType {
  key: React.Key
  name: string
  date: string
  level: string
  status: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "nfe@example.com",
    date: "Feb 5, 2023",
    level: "Admin",
    status: "Success",
    action: "",
  },
  {
    key: "2",
    name: "frnfe@example.com",
    date: "Feb 5, 2023",
    level: "Member",
    status: "Invite Pending",
    action: "",
  },
  {
    key: "3",
    name: "frnfe@example.com",
    date: "Feb 5, 2023",
    level: "Member",
    status: "Invite Pending",
    action: "",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "USER",
    dataIndex: "name",
    key: "name",
    width: "25%",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <Avatar size={24} icon={<UserOutlined />} />
        <p className="text-[14px] leading-[21px]">{source}</p>
      </div>
    ),
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    width: "20%",
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <MyIcon type="calendar" />
        <p className="text-[14px] leading-[21px]">{source}</p>
      </div>
    ),
  },
  {
    title: "ACCESS LEVEL",
    dataIndex: "level",
    key: "level",
    width: "15%",
    responsive: ["md"],
    sorter: (a, b) => a.level.localeCompare(b.level),
    render: (source: any) => {
      let className
      switch (source) {
        case "Admin":
          className = "bg-[#edf2fe] text-[#4976f4]"
          break
        case "Member":
          className = "bg-[#f9f9f9] text-black"
          break
        default:
      }
      return (
        <span className={`${className} rounded px-1.5 py-1 text-center text-[12px] font-medium leading-[17px]`}>
          {source}
        </span>
      )
    },
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    width: "15%",
    responsive: ["lg"],
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (source: any) => {
      let bgColor, textColor, badgeColor, width
      switch (source) {
        case "Success":
          bgColor = "bg-[#eefff0]"
          textColor = "text-[#589e67]"
          badgeColor = "#589e67"
          width = "w-[81px]"
          break
        case "Invite Pending":
          bgColor = "bg-[#f7f7e8]"
          textColor = "text-[#b1ab1d]"
          badgeColor = "#b1ab1d"
          width = "w-[130px]"
          break
        default:
      }
      return (
        <div
          className={`flex items-center justify-center  space-x-2 ${bgColor} ${width} h-[25px] rounded-[36px] font-medium`}
        >
          <Badge color={badgeColor} />
          <p className={textColor}>{source}</p>
        </div>
      )
    },
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    width: "25%",
    responsive: ["lg"],
    render: () => (
      <div className="flex cursor-pointer justify-center hover:rounded-full hover:bg-gray-200">
        <MyIcon type="three_dots" />
      </div>
    ),
  },
]

export default function Team() {
  return (
    <div>
      <div className="space-y-2 border-b pb-2">
        <p className="text-[20px] font-semibold leading-[27px]">Team</p>
        <p className="text-base text-[#666d80]">Manage your team</p>
      </div>
      <div className="flex flex-row-reverse items-center pb-5 pt-8">
        <Button className="h-10 w-[170px] bg-black text-base font-medium text-white">
          <div className="flex items-center space-x-2">
            <UserAddOutlined />
            <span>Invite Member</span>
          </div>
        </Button>
        <div className="mr-2 w-full">
          <MyInput />
        </div>
      </div>
      <div>
        <MyBlackTable size="middle" columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}

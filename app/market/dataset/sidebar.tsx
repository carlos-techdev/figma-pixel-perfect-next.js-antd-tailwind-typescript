import { Menu, MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    type: "group",
    label: <p className="text-gray-500">CATEGORIES</p>,
  },
  {
    label: <p className="text-gray-500">All</p>,
    key: "1",
  },
  {
    label: <p className="text-gray-500">B2B Data</p>,
    key: "2",
  },
  {
    label: <p className="text-gray-500">Web Data</p>,
    key: "3",
  },
  {
    label: <p className="text-gray-500">ecommerce Data</p>,
    key: "4",
  },
  {
    label: <p className="text-gray-500">Real Estate Data</p>,
    key: "5",
  },
  {
    label: <p className="text-gray-500">Free Datasets</p>,
    key: "6",
  },
]

export default function MarketSidebar() {
  return (
    <div className="w-full">
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} items={items} />
    </div>
  )
}

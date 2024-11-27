"use client"
import { Button, Menu, MenuProps } from "antd"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Header from "components/header"
import MyIcon from "components/icon"
import Mark from "components/mark"
import "styles/global.css"
import "styles/tailwind.css"
import "react-quill/dist/quill.snow.css"
import { HeaderProvider } from "context/main"
type MenuItem = Required<MenuProps>["items"][number]

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  let items: MenuItem[] = [],
    plan = <></>,
    header,
    sidebar

  const pathname = usePathname()

  if (pathname.includes("admin")) {
    if (isOpen) {
      items = [
        {
          label: (
            <Link href="/admin/dashboard">
              <p className="ml-1 text-sm font-medium">Dashboard</p>
            </Link>
          ),
          key: "1",
          icon: <MyIcon type="chart" />,
        },
        {
          label: (
            <Link href="/admin/user_mng">
              <p className="ml-1 text-sm font-medium">User Management</p>
            </Link>
          ),
          key: "2",
          icon: <MyIcon type="four_users" />,
        },
        {
          label: (
            <Link href="/admin/analytics">
              <p className="ml-1 text-sm font-medium">Traffic Analytics</p>
            </Link>
          ),
          key: "3",
          icon: <MyIcon type="analytics" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Database</p>,
        },
        {
          label: (
            <Link href="/admin/database/people">
              <p className="ml-1 text-sm font-medium">People</p>
            </Link>
          ),
          key: "4",
          icon: <MyIcon type="user" />,
        },
        {
          label: (
            <Link href="/admin/database/company">
              <p className="ml-1 text-sm font-medium">Companies</p>
            </Link>
          ),
          key: "5",
          icon: <MyIcon type="company" />,
        },
        {
          label: (
            <Link href="/admin/database/scraper">
              <p className="ml-1 text-sm font-medium">Scraper</p>
            </Link>
          ),
          key: "6",
          icon: <MyIcon type="scraper" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Marketplace</p>,
        },
        {
          label: (
            <Link href="/admin/market">
              <p className="ml-1 text-sm font-medium">Datasets</p>
            </Link>
          ),
          key: "7",
          icon: <MyIcon type="stackoverflow" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-sm font-medium text-gray-500">Finance</p>,
        },
        {
          label: (
            <Link href="/admin/sale">
              <p className="ml-1 text-sm font-medium">Sales Dashboard</p>
            </Link>
          ),
          key: "8",
          icon: <MyIcon type="circle_three_plus" />,
        },
        {
          label: (
            <Link href="/admin/subscription">
              <p className="ml-1 text-sm font-medium">Subscriptions</p>
            </Link>
          ),
          key: "9",
          icon: <MyIcon type="currency_circle" />,
        },
        {
          label: (
            <Link href="/admin/invoice">
              <p className="ml-1 text-sm font-medium">Invoices</p>
            </Link>
          ),
          key: "10",
          icon: <MyIcon type="invoice" />,
        },
      ]
    } else {
      items = [
        {
          key: "1",
          icon: (
            <Link href="/admin/dashboard">
              <MyIcon type="chart" />
            </Link>
          ),
        },
        {
          key: "2",
          icon: (
            <Link href="/admin/user_mng">
              <MyIcon type="four_users" />
            </Link>
          ),
        },
        {
          key: "3",
          icon: (
            <Link href="/admin/analytics">
              <MyIcon type="analytics" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "4",
          icon: (
            <Link href="/admin/database/people">
              <MyIcon type="user" />
            </Link>
          ),
        },
        {
          key: "5",
          icon: (
            <Link href="/admin/database/company">
              <MyIcon type="company" />
            </Link>
          ),
        },
        {
          key: "6",
          icon: (
            <Link href="/admin/database/scraper">
              <MyIcon type="scraper" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "7",
          icon: (
            <Link href="/admin/market">
              <MyIcon type="stackoverflow" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "8",
          icon: (
            <Link href="/admin/sale">
              <MyIcon type="circle_three_plus" />
            </Link>
          ),
        },
        {
          key: "9",
          icon: (
            <Link href="/admin/subscription">
              <MyIcon type="currency_circle" />
            </Link>
          ),
        },
        {
          key: "10",
          icon: (
            <Link href="/admin/invoice">
              <MyIcon type="invoice" />
            </Link>
          ),
        },
      ]
    }
  } else {
    if (isOpen) {
      items = [
        {
          label: (
            <Link href="/dashboard">
              <p className="ml-1 text-sm font-medium">Dashboard</p>
            </Link>
          ),
          key: "1",
          icon: <MyIcon type="chart" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Database</p>,
        },
        {
          label: (
            <Link href="/people">
              <p className="ml-1 text-sm font-medium">People</p>
            </Link>
          ),
          key: "2",
          icon: <MyIcon type="user" />,
        },
        {
          label: (
            <Link href="/company">
              <p className="ml-1 text-sm font-medium">Companies</p>
            </Link>
          ),
          key: "3",
          icon: <MyIcon type="company" />,
        },
        {
          label: (
            <Link href="/datalist">
              <p className="ml-1 text-sm font-medium">Data Lists</p>
            </Link>
          ),
          key: "4",
          icon: <MyIcon type="datalist" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Marketplace</p>,
        },
        {
          label: (
            <Link href="/market">
              <p className="ml-1 text-sm font-medium">Datasets</p>
            </Link>
          ),
          key: "5",
          icon: <MyIcon type="stackoverflow" />,
        },
      ]
      plan = (
        <div>
          <div className="mt-10 flex justify-center">
            <MyIcon type="feature" />
          </div>
          <div className="mt-4 space-y-2 text-center">
            <p className="text-sm font-medium text-gray-900">Upgrade Plan</p>
            <p className="text-sm font-normal text-gray-600">
              Upgrade plan for uninterrupted access to premium features and enhanced benefits. Don&apos;t miss out!
            </p>
            <Button className="w-full text-sm font-medium text-gray-700">Upgrade</Button>
          </div>
        </div>
      )
    } else {
      items = [
        {
          key: "1",
          icon: (
            <Link href="/dashboard">
              <MyIcon type="chart" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          icon: (
            <Link href="/people">
              <MyIcon type="user" />
            </Link>
          ),
        },
        {
          key: "3",
          icon: (
            <Link href="/company">
              <MyIcon type="company" />
            </Link>
          ),
        },
        {
          key: "4",
          icon: (
            <Link href="/datalist">
              <MyIcon type="datalist" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "5",
          icon: (
            <Link href="/market">
              <MyIcon type="stackoverflow" />
            </Link>
          ),
        },
      ]
      plan = (
        <div className="flex justify-center">
          <MyIcon type="feature" />
        </div>
      )
    }
  }

  if (pathname.includes("auth")) {
    header = null
    sidebar = null
  } else {
    header = <Header />
    sidebar = (
      <div className="fixed">
        <div className="flex h-screen">
          <div
            className={`hidden border-x md:flex md:flex-col md:justify-between  ${
              isOpen ? "md:w-64 md:pt-4" : "md:w-20"
            }`}
          >
            <div>
              {isOpen ? <Mark width={222} height={44} /> : <></>}
              <Menu theme="light" className={`${isOpen ? "pt-4" : "pt-20"}`} mode="inline" items={items} />
            </div>
            <div>{plan}</div>
          </div>
          <div
            className={`${
              isOpen ? "-ml-2.5" : "-ml-12"
            } z-10 mt-5 hidden size-5 cursor-pointer items-center justify-center bg-black md:flex`}
            onClick={toggleSidebar}
          >
            <MyIcon type="doublecaret" />
          </div>
        </div>
      </div>
    )
  }

  let side_class = ""

  if (pathname.includes("auth")) {
    side_class = ""
  } else {
    if (isOpen) {
      side_class = "md:ml-[266px]"
    } else {
      side_class = "md:ml-[102px]"
    }
  }

  if (pathname.includes("admin")) {
    if (isOpen) {
      items = [
        {
          label: (
            <Link href="/admin/dashboard">
              <p className="ml-1 text-sm font-medium">Dashboard</p>
            </Link>
          ),
          key: "1",
          icon: <MyIcon type="chart" />,
        },
        {
          label: (
            <Link href="/admin/user_mng">
              <p className="ml-1 text-sm font-medium">User Management</p>
            </Link>
          ),
          key: "2",
          icon: <MyIcon type="four_users" />,
        },
        {
          label: (
            <Link href="/admin/analytics">
              <p className="ml-1 text-sm font-medium">Traffic Analytics</p>
            </Link>
          ),
          key: "3",
          icon: <MyIcon type="analytics" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Database</p>,
        },
        {
          label: (
            <Link href="/admin/database/people">
              <p className="ml-1 text-sm font-medium">People</p>
            </Link>
          ),
          key: "4",
          icon: <MyIcon type="user" />,
        },
        {
          label: (
            <Link href="/admin/database/company">
              <p className="ml-1 text-sm font-medium">Companies</p>
            </Link>
          ),
          key: "5",
          icon: <MyIcon type="company" />,
        },
        {
          label: (
            <Link href="/admin/database/scraper">
              <p className="ml-1 text-sm font-medium">Scraper</p>
            </Link>
          ),
          key: "6",
          icon: <MyIcon type="scraper" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Marketplace</p>,
        },
        {
          label: (
            <Link href="/admin/market">
              <p className="ml-1 text-sm font-medium">Datasets</p>
            </Link>
          ),
          key: "7",
          icon: <MyIcon type="stackoverflow" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-sm font-medium text-gray-500">Finance</p>,
        },
        {
          label: (
            <Link href="/admin/sale">
              <p className="ml-1 text-sm font-medium">Sales Dashboard</p>
            </Link>
          ),
          key: "8",
          icon: <MyIcon type="circle_three_plus" />,
        },
        {
          label: (
            <Link href="/admin/subscription">
              <p className="ml-1 text-sm font-medium">Subscriptions</p>
            </Link>
          ),
          key: "9",
          icon: <MyIcon type="currency_circle" />,
        },
        {
          label: (
            <Link href="/admin/invoice">
              <p className="ml-1 text-sm font-medium">Invoices</p>
            </Link>
          ),
          key: "10",
          icon: <MyIcon type="invoice" />,
        },
      ]
    } else {
      items = [
        {
          key: "1",
          icon: (
            <Link href="/admin/dashboard">
              <MyIcon type="chart" />
            </Link>
          ),
        },
        {
          key: "2",
          icon: (
            <Link href="/admin/user_mng">
              <MyIcon type="four_users" />
            </Link>
          ),
        },
        {
          key: "3",
          icon: (
            <Link href="/admin/analytics">
              <MyIcon type="analytics" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "4",
          icon: (
            <Link href="/admin/database/people">
              <MyIcon type="user" />
            </Link>
          ),
        },
        {
          key: "5",
          icon: (
            <Link href="/admin/database/company">
              <MyIcon type="company" />
            </Link>
          ),
        },
        {
          key: "6",
          icon: (
            <Link href="/admin/database/scraper">
              <MyIcon type="scraper" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "7",
          icon: (
            <Link href="/admin/market">
              <MyIcon type="stackoverflow" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "8",
          icon: (
            <Link href="/admin/sale">
              <MyIcon type="circle_three_plus" />
            </Link>
          ),
        },
        {
          key: "9",
          icon: (
            <Link href="/admin/subscription">
              <MyIcon type="currency_circle" />
            </Link>
          ),
        },
        {
          key: "10",
          icon: (
            <Link href="/admin/invoice">
              <MyIcon type="invoice" />
            </Link>
          ),
        },
      ]
    }
  } else {
    if (isOpen) {
      items = [
        {
          label: (
            <Link href="/dashboard">
              <p className="ml-1 text-sm font-medium">Dashboard</p>
            </Link>
          ),
          key: "1",
          icon: <MyIcon type="chart" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Database</p>,
        },
        {
          label: (
            <Link href="/people">
              <p className="ml-1 text-sm font-medium">People</p>
            </Link>
          ),
          key: "2",
          icon: <MyIcon type="user" />,
        },
        {
          label: (
            <Link href="/company">
              <p className="ml-1 text-sm font-medium">Companies</p>
            </Link>
          ),
          key: "3",
          icon: <MyIcon type="company" />,
        },
        {
          label: (
            <Link href="/datalist">
              <p className="ml-1 text-sm font-medium">Data Lists</p>
            </Link>
          ),
          key: "4",
          icon: <MyIcon type="datalist" />,
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: <p className="ml-2 text-xs font-medium text-gray-500">Marketplace</p>,
        },
        {
          label: (
            <Link href="/market">
              <p className="ml-1 text-sm font-medium">Datasets</p>
            </Link>
          ),
          key: "5",
          icon: <MyIcon type="stackoverflow" />,
        },
      ]
      plan = (
        <div>
          <div className="mt-10 flex justify-center">
            <MyIcon type="feature" />
          </div>
          <div className="mt-4 space-y-2 text-center">
            <p className="text-sm font-medium text-gray-900">Upgrade Plan</p>
            <p className="text-sm font-normal text-gray-600">
              Upgrade plan for uninterrupted access to premium features and enhanced benefits. Don&apos;t miss out!
            </p>
            <Button className="w-full text-sm font-medium text-gray-700">Upgrade</Button>
          </div>
        </div>
      )
    } else {
      items = [
        {
          key: "1",
          icon: (
            <Link href="/dashboard">
              <MyIcon type="chart" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          icon: (
            <Link href="/people">
              <MyIcon type="user" />
            </Link>
          ),
        },
        {
          key: "3",
          icon: (
            <Link href="/company">
              <MyIcon type="company" />
            </Link>
          ),
        },
        {
          key: "4",
          icon: (
            <Link href="/datalist">
              <MyIcon type="datalist" />
            </Link>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "5",
          icon: (
            <Link href="/market">
              <MyIcon type="stackoverflow" />
            </Link>
          ),
        },
      ]
      plan = (
        <div className="flex justify-center">
          <MyIcon type="feature" />
        </div>
      )
    }
  }

  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <HeaderProvider>
          <div className="flex">
            {sidebar}
            <div className={`relative w-full ${side_class}  md:flex md:flex-col`}>
              {header}
              {children}
              {pathname.includes("auth") ? null : <div className="h-20"></div>}
            </div>
          </div>
        </HeaderProvider>
      </body>
    </html>
  )
}

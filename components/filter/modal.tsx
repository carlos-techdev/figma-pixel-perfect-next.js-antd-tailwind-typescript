import { Button, Collapse, Input, Select } from "antd"
import { useState } from "react"
import ReactDragListView from "react-drag-listview"
import MyIcon from "components/icon"
import { Drag } from "components/icons"

const options = [
  {
    value: "1",
    label: "Type: All",
  },
  {
    value: "2",
    label: "Type: All",
  },
]

interface handleCancelType {
  handleCancel: Function
}

const Filter: React.FC<handleCancelType> = ({ handleCancel }) => {
  const closeModal = () => {
    handleCancel()
  }

  const [pin, setPin] = useState([
    { prefix: "list", label: "Lists", flag: true, suffix: "caret" },
    { prefix: "list", label: "Personal", flag: true, suffix: "caret" },
    { prefix: "list", label: "Email Status", flag: true, suffix: "caret" },
    { prefix: "list", label: "Job Titles", flag: true, suffix: "caret" },
    { prefix: "list", label: "Company", flag: true, suffix: "caret" },
    { prefix: "list", label: "Location", flag: true, suffix: "caret" },
    { prefix: "list", label: "Employees", flag: true, suffix: "caret" },
    { prefix: "list", label: "Industry & Keywords", flag: true, suffix: "caret" },
    { prefix: "list", label: "Buying Intent", flag: false, suffix: "lock" },
    { prefix: "list", label: "Scores", flag: false, suffix: "lock" },
    { prefix: "list", label: "Technologies", flag: false, suffix: "lock" },
    { prefix: "list", label: "Revenue", flag: false, suffix: "lock" },
    { prefix: "list", label: "Funding", flag: true, suffix: "caret" },
    { prefix: "list", label: "Job Postings", flag: true, suffix: "caret" },
    { prefix: "list", label: "Signals", flag: true, suffix: "caret" },
  ])

  const [person, setPerson] = useState([
    { prefix: "contact", label: "Name", suffix: "caret" },
    { prefix: "contact", label: "Time Zone", suffix: "caret" },
    { prefix: "contact", label: "Total Years of Experience", suffix: "caret" },
    { prefix: "contact", label: "Time in Current Role", suffix: "caret" },
    { prefix: "contact", label: "Territories", suffix: "lock" },
  ])

  const [company, setCompany] = useState([
    { prefix: "contact", label: "SIC Codes", suffix: "lock" },
    { prefix: "contact", label: "Employees by Dept", suffix: "lock" },
    { prefix: "contact", label: "Headcount Growth", suffix: "lock" },
    { prefix: "contact", label: "Founded Year", suffix: "lock" },
    { prefix: "contact", label: "Languages", suffix: "lock" },
    { prefix: "contact", label: "Retail Locations", suffix: "lock" },
    { prefix: "contact", label: "News", suffix: "lock" },
  ])

  const [engagement, setEngagement] = useState([
    { prefix: "contact", label: "Sequence", question: true, suffix: "lock" },
    { prefix: "contact", label: "Last Activity", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Sent", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Clicked", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Replied", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Meeting Set", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Bounced", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Unsubscribed", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Spamblocked", question: true, suffix: "lock" },
    { prefix: "contact", label: "Email Auto Responder", question: true, suffix: "lock" },
  ])

  const [conversation, setConversation] = useState([
    { prefix: "contact", label: "Conversation Recording", question: true, suffix: "lock" },
    { prefix: "contact", label: "Conversation Tracker Keywords", question: true, suffix: "lock" },
  ])

  const [created, setCreated] = useState([
    { prefix: "contact", label: "Source", suffix: "lock" },
    { prefix: "contact", label: "Contact CSV Import", suffix: "lock" },
    { prefix: "contact", label: "Contact Data Request", suffix: "lock" },
    { prefix: "contact", label: "Contact Created Date", suffix: "lock" },
  ])

  const [misc, setMisc] = useState([
    { prefix: "contact", label: "Date Refreshed in Apollo", suffix: "lock" },
    { prefix: "contact", label: "Phone Status/Confidence", suffix: "lock" },
    { prefix: "contact", label: "Parent Accounts", suffix: "lock" },
    { prefix: "contact", label: "Stage", suffix: "lock" },
    { prefix: "contact", label: "Custom Fields", suffix: "lock" },
  ])

  const dragPinProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...pin]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setPin(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragPersonProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...person]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setPerson(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragCompanyProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...company]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setCompany(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragEngagementProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...engagement]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setEngagement(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragConversationProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...conversation]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setConversation(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragCreatedProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...created]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setCreated(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragMiscProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...misc]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setMisc(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  return (
    <div className="px-2 py-1">
      <div className="flex justify-between py-1">
        <div className="flex items-center">
          <p className="text-base font-medium">Filters</p>
          <Input placeholder="Search Filters" prefix={<MyIcon type="Magnifying" />} className="ml-4 w-[200px]" />
          <div className="ml-2 flex items-center space-x-1 border">
            <MyIcon type="active" />
            <Select
              defaultValue={"1"}
              variant="borderless"
              className="w-[100px]"
              options={options}
              suffixIcon={<MyIcon type="caret" className="rotate-0" />}
            />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-base text-gray-500">187.23M records found</p>
          <Button className="ml-4 bg-primary-500 font-bold text-white" onClick={closeModal}>
            Apply Filters
          </Button>
          <div className="ml-2 cursor-pointer hover:bg-gray-200" onClick={closeModal}>
            <MyIcon type="caret" className="rotate-90" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 text-[12px]">
        <div className="space-y-1">
          <p className="text-[16px]">Pinned Filters</p>
          <ReactDragListView {...dragPinProps}>
            <div className="space-y-1">
              {pin.map((item, id) => (
                <div key={id} className="flex border">
                  <span className="mt-2.5 cursor-pointer">
                    <Drag />
                  </span>
                  <Collapse
                    ghost
                    className="grow"
                    key={id}
                    size="small"
                    expandIconPosition="end"
                    items={[
                      {
                        key: id,
                        label: <div className="flex items-center"><p>{item.label}</p><MyIcon type="user" /></div>,
                        children: <p>123</p>,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </ReactDragListView>
        </div>
        <div>
          <div className="space-y-1">
            <p className="text-[16px] ">Person Info</p>
            <ReactDragListView {...dragPersonProps}>
              <div className="space-y-1">
                {person.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-[16px] ">Company Info</p>
            <ReactDragListView {...dragCompanyProps}>
              <div className="space-y-1">
                {company.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
        </div>
        <div>
          <div className="space-y-1">
            <p className="text-[16px] ">Engagement Activiry</p>
            <ReactDragListView {...dragEngagementProps}>
              <div className="space-y-1">
                {engagement.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-[16px] ">Conversation</p>
            <ReactDragListView {...dragConversationProps}>
              <div className="space-y-1">
                {conversation.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
        </div>
        <div>
          <div className="space-y-1">
            <p className="text-[16px] ">Created Source</p>
            <ReactDragListView {...dragCreatedProps}>
              <div className="space-y-1">
                {created.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-[16px] ">Misc</p>
            <ReactDragListView {...dragMiscProps}>
              <div className="space-y-1">
                {misc.map((item, id) => (
                  <div key={id} className="flex border">
                    <span className="mt-2.5 cursor-pointer">
                      <Drag />
                    </span>
                    <Collapse
                      ghost
                      className="grow"
                      key={id}
                      size="small"
                      expandIconPosition="end"
                      items={[
                        {
                          key: id,
                          label: <p>{item.label}</p>,
                          children: <p>123</p>,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </ReactDragListView>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter

import { Collapse, Modal } from "antd"
import { useState } from "react"
import ReactDragListView from "react-drag-listview"
import MyIcon from "components/icon"
import { Drag } from "components/icons"

interface handleColumnType {
  column: boolean
  handleColumnOk: any
  handleColumnCancel: any
}

const SearchColumn: React.FC<handleColumnType> = ({ column, handleColumnOk, handleColumnCancel }) => {
  const closeModal = () => {
    handleColumnCancel()
  }

  const [visible, setVisible] = useState([
    { prefix: "list", label: "Lists", flag: true, suffix: "caret" },
    { prefix: "list", label: "Personal", flag: true, suffix: "caret" },
    { prefix: "list", label: "Email Status", flag: true, suffix: "caret" },
    { prefix: "list", label: "Job Titles", flag: true, suffix: "caret" },
    { prefix: "list", label: "Company", flag: true, suffix: "caret" },
    { prefix: "list", label: "Location", flag: true, suffix: "caret" },
    { prefix: "list", label: "Employees", flag: true, suffix: "caret" },
    { prefix: "list", label: "Industry & Keywords", flag: true, suffix: "caret" },
    { prefix: "list", label: "Buying Intent", flag: false, suffix: "lock" },
  ])

  const [hidden, setHidden] = useState([
    { prefix: "contact", label: "Scores", suffix: "caret" },
    { prefix: "contact", label: "Technologies", suffix: "caret" },
    { prefix: "contact", label: "Revenue", suffix: "caret" },
    { prefix: "contact", label: "Funding", suffix: "caret" },
    { prefix: "contact", label: "Job Postings", suffix: "lock" },
  ])

  const dragVisibleProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...visible]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setVisible(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  const dragHiddenProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data1 = [...hidden]
      const item = data1.splice(fromIndex, 1)[0]
      if (item) data1.splice(toIndex, 0, item)
      setHidden(data1)
    },
    nodeSelector: "div",
    handleSelector: "span",
  }

  return (
    <Modal
      open={column}
      centered
      width={238}
      onOk={handleColumnOk}
      onCancel={handleColumnCancel}
      closable={false}
      footer={null}
    >
      <div className="py-1">
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-[16px]">Visible</p>
            <div onClick={closeModal} className="hover:bg-gray-200">
              <MyIcon type="x" />
            </div>
          </div>
          <ReactDragListView {...dragVisibleProps}>
            <div className="space-y-1">
              {visible.map((item, id) => (
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
        <div className="mt-2 space-y-1">
          <p className="text-[16px]">Hidden</p>
          <ReactDragListView {...dragHiddenProps}>
            <div className="space-y-1">
              {hidden.map((item, id) => (
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
    </Modal>
  )
}

export default SearchColumn

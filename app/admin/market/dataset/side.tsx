import { Button, Input, Modal } from "antd"
import { useState } from "react"
import MyIcon from "components/icon"

const categories: string[] = ["All", "B2B Data", "Web Data", "eCommerce Data", "Real Estate Data", "Free Datasets"]

export default function MarketSidebar() {
  const [isAdd, setIsAdd] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const addCategory = () => {
    setIsAdd(true)
  }

  const deleteCategory = () => {
    setIsDelete(true)
  }

  const handleOkAdd = () => {
    setIsAdd(false)
  }

  const handleCancelAdd = () => {
    setIsAdd(false)
  }

  const handleOkDelete = () => {
    setIsDelete(false)
  }

  const handleCancelDelete = () => {
    setIsDelete(false)
  }

  return (
    <div className="w-full border-r">
      <p className="text-[14px] font-medium leading-[21px] text-[#a3a7b0]">CATEGORIES</p>
      <div className="mt-3 space-y-1">
        {categories.map((category, id) =>
          id === 0 ? (
            <div key={id} className="text-gray-[#a3a7b0] text-balck rounded px-2 py-[7.5px] text-[14px] font-medium leading-[21px] hover:bg-[#f2f2f2]">
              {category}
            </div>
          ) : (
            <div key={id} className="text-balck flex items-center justify-between rounded px-2 py-[7.5px] text-[14px] font-medium leading-[21px] hover:bg-[#f2f2f2]">
              <p>{category}</p>
              <div onClick={deleteCategory} className="cursor-pointer">
                <MyIcon type="black_x" />
              </div>
            </div>
          )
        )}
      </div>

      <div
        className="mt-7 flex items-center space-x-2 pl-2 text-[14px] font-medium leading-[21px] cursor-pointer"
        onClick={addCategory}
      >
        <MyIcon type="plus" />
        <p>Add New Category</p>
      </div>
      <Modal centered title={null} footer={null} closable={false} open={isDelete} width={384}>
        <div className="p-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Delete confirmation</p>
            <span onClick={handleCancelDelete} className="cursor-pointer">
              <MyIcon type="x" />
            </span>
          </div>
          <div className="mt-2 text-sm text-[#4b5563]">
            Are you sure you want to delete “Category Name”? This action is irreversible. Proceed or click cancel to
            keep the item.
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button className="h-11 text-base font-medium" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button className="h-11 bg-[#dc2626] text-base font-medium text-white" onClick={handleOkDelete}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
      <Modal centered title={null} footer={null} closable={false} open={isAdd} width={384}>
        <div className="p-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Add New Category</p>
            <span onClick={handleCancelAdd} className="cursor-pointer">
              <MyIcon type="x" />
            </span>
          </div>
          <div className="mt-2 text-sm text-[#4b5563]">
            <Input placeholder="Please Choose category name" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button className="h-11 text-base font-medium" onClick={handleCancelAdd}>
              Cancel
            </Button>
            <Button className="h-11 bg-black text-base font-medium text-white" onClick={handleOkAdd}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

import { Button, Input, Modal } from "antd"

interface ModalProps {
  ModalOpen: boolean
  ChangeStatus: (val: boolean) => void
}
export default function AddProductModal(props: ModalProps) {
  const handleOk = () => {
    props.ChangeStatus(false)
  }

  const handleCancel = () => {
    props.ChangeStatus(false)
  }
  return (
    <Modal
      centered
      title={
        <div className="flex h-[40px] content-center border-b border-solid border-gray-200">
          <div className="text-[16px] font-semibold leading-[120%] tracking-normal">Add Product</div>
        </div>
      }
      footer={
        <div className="flex h-[40px] content-center justify-between gap-1">
          <Button
            onClick={handleCancel}
            className="h-[40px] flex-1 bg-[#F2F2F2] text-[16px] font-medium leading-[150%] tracking-normal text-black"
          >
            Cancel
          </Button>
          <Button
            onClick={handleOk}
            className="h-[40px] flex-1 bg-black text-[16px] font-medium leading-[150%] tracking-normal text-white"
          >
            Save
          </Button>
        </div>
      }
      open={props.ModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="flex h-[420px] flex-col justify-between pt-[16px]">
        <div className="flex h-[70px] w-full flex-col justify-between">
          <div className="text-[14px] font-normal leading-[150%] tracking-normal text-black">Product Name</div>
          <Input
            className="h-[41px] text-[16px] font-medium leading-[150%] tracking-[2%]"
            placeholder="Enter Product name here"
          ></Input>
        </div>
        <div className="flex h-[70px] w-full flex-col justify-between">
          <div className="text-[14px] font-normal leading-[150%] tracking-normal text-black">Quantity Label</div>
          <Input
            className="h-[41px] text-[16px] font-medium leading-[150%] tracking-[2%]"
            placeholder="Quantity Label, for Example 'Records'"
          ></Input>
        </div>
        <div className="flex h-[70px] w-full flex-col justify-between">
          <div className="text-[14px] font-normal leading-[150%] tracking-normal text-black">Amount</div>
          <Input
            className="h-[41px] text-[16px] font-medium leading-[150%] tracking-[2%]"
            placeholder="Quantity units, for Example '50,000'"
          ></Input>
        </div>
        <div className="flex h-[70px] w-full flex-col justify-between">
          <div className="text-[14px] font-normal leading-[150%] tracking-normal text-black">Pricing Label</div>
          <Input
            className="h-[41px] text-[16px] font-medium leading-[150%] tracking-[2%]"
            placeholder="Quantity Label, for Example 'Cost Per Record'"
          ></Input>
        </div>
        <div className="flex h-[70px] w-full flex-col justify-between">
          <div className="text-[14px] font-normal leading-[150%] tracking-normal text-black">Currency</div>
          <Input className="h-[41px] text-[16px] font-medium leading-[150%] tracking-[2%]" value="EUR - Euro"></Input>
        </div>
      </div>
    </Modal>
  )
}

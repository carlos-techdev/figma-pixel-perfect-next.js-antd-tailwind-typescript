import { Button, Input, Switch } from "antd"
import MyIcon from "components/icon"
import Info from "../info"
import Payment from "../payment"

export default function Purchase() {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-semibold">Purchase Dataset</div>
      <div className="p-4 pb-20 sm:flex sm:space-x-8">
        <div className="sm:w-2/3">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-lg font-semibold">Purchase Summary</p>
              <p>Linkedin Profile Database</p>
              <p>Cost Per Record $0.0019</p>
            </div>
            <Button icon={<MyIcon type="trash_2" />}></Button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Switch defaultChecked />
              <p className="text-lg font-semibold">Set record limit</p>
            </div>
            <p className="text-gray-600">Enter the number of records you would like. Records are selected randomly.</p>
            <Input defaultValue="800000" className="w-48" />
          </div>
          <Info />
        </div>
        <div className="pr-[60px] sm:w-1/3">
          <p className="text-[18px] font-bold leading-[21.6px]">Order</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between font-bold">
              <p className="text-[16px] leading-[19.2px]">Linkedin Profiles</p>
              <p className="text-[13px] leading-[15.6px]">x</p>
            </div>
            <div className="flex justify-between text-[#333333]">
              <p className="text-base">Records</p>
              <p className="text-[16px] leading-[19.2px]">800,000</p>
            </div>
            <div className="flex justify-between text-[#333333]">
              <p className="text-base">Cost Per Record</p>
              <p className="text-[16px] leading-[19.2px]">$0.0019</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2 text-[#333333]">
              <p className="text-base">Sub Total</p>
              <p className="text-[16px] leading-[19.2px]">$1,520</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-[24px] font-bold leading-[28.8px] text-[#333333]">
            <p>Total</p>
            <p>$1,520</p>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  )
}

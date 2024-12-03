import { Button, Radio, Space } from "antd"
import MyIcon from "components/icon"

export default function Payment() {
  return (
    <>
      <div className="pr-[9px] pt-[65px]">
        <p className="text-[18px] font-bold leading-[21.6px]">Payment Method</p>
        <div className=" mt-6 flex items-center justify-between">
          <div className="space-y-4 text-[16px] leading-[19.2px]">
            <p>Credit Card</p>
            <p>Wire Transfer</p>
            <p>Crypto</p>
          </div>
          <Radio.Group defaultValue={1}>
            <Space direction="vertical" size={10}>
              <Radio value={1}></Radio>
              <Radio value={2}></Radio>
              <Radio value={3}></Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="space-y-2 pt-8 text-center">
        <Button className="leaidng-[16.8px] h-[41px] w-full bg-black text-[14px] font-semibold text-white">
          <div className="flex items-center justify-center space-x-2">
            <MyIcon type="arrow" className="rotate-45 stroke-white hover:stroke-black "/>
            <p>COMPLETE PURCHASE</p>
          </div>
        </Button>
        <p className="mt-[14.5px] text-[14px] leaidng-[16.8px] py-3 font-semibold">CANCEL</p>
        <p className="text-[13px] leading-[15.6px] font-medium">
          By Click <span className="font-bold">&quot;Complete Purchase&quot;</span>, I agree Terms and Conditions and
          Privacy Policy
        </p>
      </div>
    </>
  )
}

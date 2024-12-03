import { Button } from "antd"
import Mark from "components/mark"

export default function Plan() {
  return (
    <div>
      <div className="border-y py-5 pl-3 text-[24px] font-medium leading-[29px]">Extension</div>
      <div className="grid px-2 pt-[21px] md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[10px] border pb-6 pr-6 pt-3">
          <Mark width={184} height={49} />
          <div className="pl-6">
            <p className="text-[18px] font-semibold leading-[25px]">Phone & Email Finder</p>
            <p className="mt-2 text-[14px] leading-[21px] text-[#666d80]">
              Collect relevant leads and send personalized messages to build your business connections. Automate,
              Enrich, and Scale your sales without losing your personal touch, and watch your conversions grow.
            </p>
            <Button className="mt-5 h-10 w-full rounded-lg text-[12px] font-semibold leading-[18px]">Download</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

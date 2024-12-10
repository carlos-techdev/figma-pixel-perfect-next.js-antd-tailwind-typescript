import { BlackBarChart } from "components/chart"

export default function UserLast() {
  return (
    <div className="space-y-4 rounded-xl border py-6 pl-6 pr-[27px]">
      <div className="space-y-1">
        <p className="text-[20px] font-bold leading-[24px] text-[#2e3138]">Users in Last 30 Minutes</p>
        <p className="text-[28px] leading-[36px] text-[#454a54]">56</p>
      </div>
      <div className="space-y-4 pr-6">
        <div className="text-[14px] font-semibold leading-[22px] text-[#454a54]">Top Price in a Day</div>
        <div className="border-t border-[#e3e5e8]">
          <div className="pt-2">
            <BlackBarChart />
          </div>
        </div>
      </div>
      <div className="text-[14px] leading-[22px] text-[#454a54]">
        <div className="flex justify-between bg-[#eeeff1] py-2.5 pr-6">
          <div className="font-semibold">Most Active Pages</div>
          <div>User Count</div>
        </div>
        <div className="flex justify-between py-3 pr-6 text-[14px] leading-[22px]">
          <div>/service/design</div>
          <div className="font-semibold">41</div>
        </div>
        <div className="flex justify-between py-3 pr-6 text-[14px] leading-[22px]">
          <div>/shop/cart</div>
          <div className="font-semibold">36</div>
        </div>
        <div className="flex justify-between py-3 pr-6 text-[14px] leading-[22px]">
          <div>/home</div>
          <div className="font-semibold">17</div>
        </div>
        <div className="flex justify-between py-3 pr-6 text-[14px] leading-[22px]">
          <div>/category/category</div>
          <div className="font-semibold">12</div>
        </div>
      </div>
    </div>
  )
}

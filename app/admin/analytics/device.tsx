import MyIcon from "components/icon";

export default function VisitDevice() {
  return (
    <div className="pl-6 rounded-xl border border-[#eeeff1]">
        <div className="py-6 space-y-1.5">
            <div className="text-[20px] leading-6 font-bold text-[#2e3138]">Visit by Device</div>
            <div className="text-[14px] font-semibold text-[#5c6370]">Find the visitor place</div>
        </div>
        <div className="py-6 pr-6">
            <div className="flex items-baseline space-x-5">
                <div className="space-y-1">
                    <div className="text-[18px] leading-[26px] font-semibold text-[#454a54]">Visitors</div>
                    <div className="text-4xl text-[#2e3138] font-bold">3,254</div>
                </div>
                <div>
                    <div className="flex items-center space-x-1">
                        <MyIcon type="arrow" className="stroke-[#15994e] -rotate-90" />
                        <p className="text-base font-semibold text-[#15994e]">16%</p>
                    </div>
                    <div className="text-base font-semibold text-[#454a54]">from last week</div>
                </div>
            </div>
        </div>
        <div className="pt-12 space-y-6">
            <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                <MyIcon type="mobile" />
                <p className="pr-[13px] text-base font-semibold text-[#454a54]">Mobile</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-[135px] h-3 rounded bg-[#afafaf]"></div>
                    <p className="text-[14px] leaing-[22px] text-[#454a54] font-semibold">2,442</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                <MyIcon type="desktop" />
                <p className="text-base font-semibold text-[#454a54]">Desktop</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-[82px] h-3 rounded bg-black"></div>
                    <p className="text-[14px] leaing-[22px] text-[#454a54] font-semibold">812</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                <MyIcon type="tablet" />
                <p className="pr-[17px] text-base text-[#454a54] font-semibold">Tablet</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-3 rounded bg-[#727272]"></div>
                    <p className="text-[14px] leaing-[22px] text-[#454a54] font-semibold">216</p>
                </div>
            </div>
        </div>
    </div>
  )
}

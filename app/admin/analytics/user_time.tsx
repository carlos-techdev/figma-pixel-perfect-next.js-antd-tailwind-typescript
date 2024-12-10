const str: string[] = []
for (let i = 0; i < 168; i++) {
  str.push("")
}

export default function UserTime() {
  return (
    <div className="rounded-xl border p-6">
      <div className="space-y-5">
        <div className="space-y-1.5">
          <p className="text-[20px] font-bold leading-6 text-[#2e3138]">User at a time</p>
          <p className="text-[14px] font-semibold leading-5 text-[#454a54]">Last 7 days</p>
        </div>
        <div className="flex flex-row-reverse">
          <div className="space-y-[13.36px] text-[12px] leading-[18px]">
            <div className="flex items-center space-x-0.5">
              <p>12</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>2</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>4</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>6</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>8</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>10</p>
              <p>AM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>12</p>
              <p>PM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>2</p>
              <p>PM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>4</p>
              <p>PM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>6</p>
              <p>PM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>8</p>
              <p>PM</p>
            </div>
            <div className="flex items-center space-x-0.5">
              <p>10</p>
              <p>PM</p>
            </div>
          </div>
          <div className="pr-3 grow">
          <div className="grid grid-cols-7 gap-[3px]">
            {str.map((item, key) => (
              <div key={key} className="h-[12.25px] gap-[3px] rounded-[3px] bg-[#afafaf] opacity-35"></div>
            ))}
          </div>
          <div className="pt-3 grid grid-cols-7 text-[12px] leading-[18px] font-medium text-[#454a54]">
              <div className="text-center">Sun</div>
              <div className="text-center">Mon</div>
              <div className="text-center">Tue</div>
              <div className="text-center">Wed</div>
              <div className="text-center">Thu</div>
              <div className="text-center">Fri</div>
              <div className="text-center">Sat</div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

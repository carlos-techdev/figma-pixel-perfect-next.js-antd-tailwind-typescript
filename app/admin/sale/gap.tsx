import MyIcon from 'components/icon'

export default function Gap() {
  return (
    <div>
      <div className="grid gap-5 pt-8 pr-9 grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="envelope" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Total Sales</div>
          <div className="text-[28px] font-medium leading-[34px]">$52,515</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="briefcase" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Total Free Users</div>
          <div className="text-[28px] font-medium leading-[34px]">5,256</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="contact" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Total Paid Users</div>
          <div className="text-[28px] font-medium leading-[34px]">1,652</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="active" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Datasets orders</div>
          <div className="text-[28px] font-medium leading-[34px]">585</div>
        </div>
      </div>
    </div>
  )
}

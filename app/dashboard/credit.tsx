import MyIcon from 'components/icon'

export default function Credit() {
  return (
    <div>
      <div className="grid gap-6 px-4 py-8 grid-cols-2 lg:grid-cols-4 lg:pr-16">
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="envelope" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">People Enrichment</div>
          <div className="text-[28px] font-medium leading-[34px]">25,000</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="briefcase" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Companies Enrichment</div>
          <div className="text-[28px] font-medium leading-[34px]">1,458</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="contact" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-sm font-medium text-gray-500">Scraping Credits</div>
          <div className="text-[28px] font-medium leading-[34px]">1,652</div>
        </div>
        <div className="rounded bg-white p-4 shadow">
          <div className="text-sm font-medium text-gray-500">Credit Usage</div>
          <p className="text-xs font-medium text-gray-500">
            Credits are deducted from your plan when you retrieve contact data in Reach Data.
          </p>
          <div className="mt-4 flex flex-row-reverse text-xs font-medium underline">View Credit Usage</div>
        </div>
      </div>
    </div>
  )
}

"use client"

import CreditTable from "./credit_table"
import DatasetTable from "./dataset_table"

export default function Analytics() {
  return (
    <div>
      <div className="border-y py-5 pl-[23px] text-[24px] font-bold leading-[28.8px]">Subscriptions</div>
      <CreditTable />
      <DatasetTable />
    </div>
  )
}

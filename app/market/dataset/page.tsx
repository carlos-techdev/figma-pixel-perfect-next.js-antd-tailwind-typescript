"use client"

import MyPagination from "components/pagination"
import MarketMain from "./main"
import MarketSidebar from "./sidebar"

export default function Dataset() {
  return (
    <div>
      <div className="flex space-x-4">
        <div className="hidden sm:flex sm:w-1/5">
          <MarketSidebar />
        </div>
        <div className="w-full sm:w-4/5">
          <MarketMain />
          <div className="mt-20 text-center">
            <MyPagination />
          </div>
        </div>
      </div>
    </div>
  )
}

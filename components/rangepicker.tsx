"use client"

import { Button, DatePicker, TimeRangePickerProps } from "antd"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { useState } from "react"
import MyIcon from "./icon"

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker
const monthFormat = "MMMM, YYYY"
const dateFormat = "MMMM, DD, YYYY"
const currentDate = new Date().getDate()
const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Today", value: [dayjs(), dayjs()] },
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 3 months", value: [dayjs().add(-90, "d"), dayjs()] },
  { label: "Last 12 months", value: [dayjs().add(-365, "d"), dayjs()] },
  { label: "Month to date", value: [dayjs().add(-currentDate, "d"), dayjs()] },
  { label: "Quarter to date", value: [dayjs().add(-(61 + currentDate), "d"), dayjs()] },
  { label: "Year to date", value: [dayjs().add(-(334 + currentDate), "d"), dayjs()] },
  { label: "All time", value: [dayjs(), dayjs()] },
]

export default function MyRangePicker(props: { type: any }) {
  let { type } = props
  const [open, setOpen] = useState(false)

  const openPicker = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <div>
      <RangePicker
        onClick={openPicker}
        open={open}
        format={type === "month" ? monthFormat : dateFormat}
        picker={type}
        suffixIcon={<MyIcon type="caret" />}
        separator={<div className="mr-5 w-4 border border-black"></div>}
        renderExtraFooter={() => (
          <div className="space-x-2 py-[19px] pr-8 text-right">
            <Button className="h-10 w-[85px] text-base font-medium" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="h-10 w-[85px] bg-black text-base font-medium text-white" onClick={handleOk}>
              Apply
            </Button>
          </div>
        )}
        presets={type === "month" ? [] : rangePresets}
        defaultValue={
          type === "month"
            ? [dayjs("January, 2023", monthFormat), dayjs("December, 2023", monthFormat)]
            : [dayjs("January, 01, 2023", dateFormat), dayjs("December, 01, 2023", dateFormat)]
        }
      />
    </div>
  )
}

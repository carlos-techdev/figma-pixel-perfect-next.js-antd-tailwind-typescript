import WorldMap from "react-svg-worldmap"
import { HorizontalChart } from "components/chart"

const data = [
  { country: "us", value: 71 },
  { country: "nl", value: 95 },
  { country: "it", value: 13 },
  { country: "fr", value: 39 },
  { country: "jp", value: 88 },
]

const mapStyling = {
  fillColor: "black", // Set the fill color to black
  hoverFillColor: "black", // Keep the fill color black on hover
}

export default function Session() {
  return (
    <div className="rounded-xl border py-6 pl-6">
      <div className="space-y-5 pr-[51px]">
        <div className="space-y-1.5">
          <p className="text-[20px] font-bold leading-[24px] text-[#2e3138]">Sessions by country</p>
          <p className="text-sm font-semibold text-[#454a54]">Last 7 days</p>
        </div>
        <div className="flex justify-center">
          <WorldMap
            color="black"
            backgroundColor="white"
            richInteraction
            value-suffix="people"
            size="sm"
            styleFunction={() => ({
              fill: mapStyling.fillColor,
              strokeWidth: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                fill: mapStyling.hoverFillColor,
              },
            })}
            data={data}
          />
        </div>
      </div>
      <div className="pr-6 pt-7">
        <HorizontalChart />
      </div>
    </div>
  )
}

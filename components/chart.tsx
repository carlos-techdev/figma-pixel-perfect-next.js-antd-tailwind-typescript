import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import "chart.js/auto"
import { Bar } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  BarElement,
  Filler,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const customBarTooltip = (context: { chart: ChartJS; tooltip: any }) => {
  const { chart, tooltip } = context
  let tooltipEl = document.getElementById("chartjs-tooltip")

  // Create tooltip element if it doesn't exist
  if (!tooltipEl) {
    tooltipEl = document.createElement("div")
    tooltipEl.id = "chartjs-tooltip"
    tooltipEl.innerHTML = "<table></table>"
    document.body.appendChild(tooltipEl)
  }

  // Hide tooltip if opacity is 0
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0"
    return
  }

  // Set caret position
  tooltipEl.classList.remove("above", "below", "no-transform")
  if (tooltip.yAlign) {
    tooltipEl.classList.add(tooltip.yAlign)
  } else {
    tooltipEl.classList.add("no-transform")
  }

  // Set content
  if (tooltip.body) {
    const titleLines = tooltip.title || []
    const bodyLines = tooltip.body.map((item: any) => item.lines)

    let innerHtml = "<thead>"

    titleLines.forEach((title: any) => {
      innerHtml += `<tr><th><div class='flex items-center space-x-2 font-medium'><div class='bg-black rounded-full p-2'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"></path></svg></div><span class="text-[14px] leading-[21px] text-[#727272]">${title} ${new Date().getFullYear()}</span></div></th></tr>`
    })
    innerHtml += "</thead><tbody>"

    bodyLines.forEach((body: any) => {
      innerHtml += `<tr><td><div class='px-3 h-[38px] mt-2 flex items-center space-x-2 font-medium bg-[#f9f9f9] border-[#e4e4e4] border rounded'><span class='text-[14px] leading-[21px] text-[#727272]'>Customer Growth</span><span class='text-base text-black'>${body}%</span></td></tr>`
    })
    innerHtml += "</tbody>"

    const tableRoot = tooltipEl.querySelector("table")
    if (tableRoot) {
      tableRoot.innerHTML = innerHtml
    }
  }

  // Set tooltip position
  const position = chart.canvas.getBoundingClientRect()
  let width = 242
  let height = 99
  tooltipEl.style.width = `${width}px`
  tooltipEl.style.height = `${height}px`
  tooltipEl.style.borderRadius = "8px"
  tooltipEl.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  tooltipEl.style.color = "white"
  tooltipEl.style.opacity = "1"
  tooltipEl.style.position = "absolute"
  tooltipEl.style.left = position.left + window.scrollX + tooltip.caretX + "px"
  tooltipEl.style.top = position.top + window.scrollY + tooltip.caretY + "px"
  tooltipEl.style.padding = "auto"
  tooltipEl.style.pointerEvents = "none"
  tooltipEl.style.marginTop = `-${height + 1}px`
}

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 100) + 1),
        backgroundColor: "#d8d8d8",
        barThickness: 32,
        hoverBackgroundColor: "black",
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 16,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        border: { dash: [5, 5] },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "black",
          font: {
            size: 16,
          },
          callback: function (value: any) {
            return value + "%"
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        external: customBarTooltip,
      },
    },
  }

  return (
    <div>
      <Bar height="280px" data={chartData} options={options} />
    </div>
  )
}

export { BarChart }

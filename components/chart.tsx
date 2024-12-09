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
import { useEffect, useMemo, useRef, useState } from "react"
import { Bar, Doughnut, Line } from "react-chartjs-2"

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

const customLineTooltip = (context: { chart: ChartJS; tooltip: any }) => {
  const { chart, tooltip } = context
  console.log(tooltip)

  let tooltipEl = document.getElementById("chartjs-line-tooltip")

  // Create tooltip element if it doesn't exist
  if (!tooltipEl) {
    tooltipEl = document.createElement("div")
    tooltipEl.id = "chartjs-line-tooltip"
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
    console.log(tooltip)
    const bodyLines = tooltip.body.map((item: any) => item.lines)

    let innerHtml = "<thead>"

    titleLines.forEach((title: any) => {
      innerHtml += `<tr><td><p class='text-sm pl-3.5 pt-2.5 font-bold text-[#1d30d7]'>Active users</p></td></tr>`
      innerHtml += `<tr><td><p class='text-[12px] pl-3.5 leading-[18px] font-medium text-[#454a54]'>${title} vs 27 June</p></td></tr>`
    })
    innerHtml += "</thead><tbody>"

    bodyLines.forEach((body: any) => {
      innerHtml += `<tr><td><div class='px-3.5 mt-4 flex items-center justify-between'><div class='flex items-center space-x-1'><div class='size-1 rounded-full bg-[#1d30d7]'></div><div class='text-[13px] leading-5 font-semibold text-[#3245ec]'>${body}</div></div><div class='text-[12px] leading-[18px] font-semibold text-[#454a54]'>Weekly Active Users</div></div></td></tr>`
      innerHtml += `<tr><td><div class='px-3.5 flex items-center justify-between'><div class='flex items-center space-x-1'><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2838_33220)">
<path d="M10.3669 7.5L6.40853 3.54167L4.3252 5.625L1.2002 2.5" stroke="#DC3826" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.8667 7.5H10.3667V5" stroke="#DC3826" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2838_33220">
<rect width="10" height="10" fill="white" transform="translate(0.783447)"/>
</clipPath>
</defs>
</svg><p class='text-[13px] leading-5 font-semibold text-[#dc3826]'>- 8.08%</p>
</div><p class='text-[12px] leading-[18px] font-semibold text-[#454a54]'>From last week</p></div></td></tr>`
    })
    innerHtml += "</tbody>"

    const tableRoot = tooltipEl.querySelector("table")
    if (tableRoot) {
      tableRoot.innerHTML = innerHtml
    }
  }

  // Set tooltip position
  const position = chart.canvas.getBoundingClientRect()
  let height = 119
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

const customsalesTooltip = (context: { chart: ChartJS; tooltip: any }) => {
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
    console.log(tooltip)
    const bodyLines = tooltip.body.map((item: any) => item.lines)

    let innerHtml = "<thead>"

    titleLines.forEach((title: any) => {
      innerHtml += `<tr><th><div class='flex items-center space-x-2 font-medium'><svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.34375C10.0716 2.34375 8.18657 2.9394 6.58319 4.05539C4.97982 5.17137 3.73013 6.75756 2.99218 8.61337C2.25422 10.4692 2.06114 12.5113 2.43735 14.4814C2.81355 16.4515 3.74215 18.2612 5.10571 19.6816C6.46928 21.1019 8.20656 22.0692 10.0979 22.4611C11.9892 22.853 13.9496 22.6519 15.7312 21.8832C17.5127 21.1144 19.0355 19.8127 20.1068 18.1425C21.1782 16.4723 21.75 14.5087 21.75 12.5C21.7473 9.80727 20.7192 7.22564 18.8913 5.32159C17.0634 3.41754 14.585 2.34659 12 2.34375ZM13.125 17.1875H12.75V17.9688C12.75 18.176 12.671 18.3747 12.5303 18.5212C12.3897 18.6677 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.6677 11.4697 18.5212C11.329 18.3747 11.25 18.176 11.25 17.9688V17.1875H9.75C9.55109 17.1875 9.36033 17.1052 9.21967 16.9587C9.07902 16.8122 9 16.6135 9 16.4062C9 16.199 9.07902 16.0003 9.21967 15.8538C9.36033 15.7073 9.55109 15.625 9.75 15.625H13.125C13.4234 15.625 13.7095 15.5015 13.9205 15.2818C14.1315 15.062 14.25 14.7639 14.25 14.4531C14.25 14.1423 14.1315 13.8443 13.9205 13.6245C13.7095 13.4047 13.4234 13.2812 13.125 13.2812H10.875C10.1788 13.2812 9.51113 12.9932 9.01885 12.4804C8.52657 11.9676 8.25 11.2721 8.25 10.5469C8.25 9.82167 8.52657 9.12617 9.01885 8.61338C9.51113 8.10059 10.1788 7.8125 10.875 7.8125H11.25V7.03125C11.25 6.82405 11.329 6.62534 11.4697 6.47882C11.6103 6.33231 11.8011 6.25 12 6.25C12.1989 6.25 12.3897 6.33231 12.5303 6.47882C12.671 6.62534 12.75 6.82405 12.75 7.03125V7.8125H14.25C14.4489 7.8125 14.6397 7.89481 14.7803 8.04132C14.921 8.18784 15 8.38655 15 8.59375C15 8.80095 14.921 8.99966 14.7803 9.14618C14.6397 9.29269 14.4489 9.375 14.25 9.375H10.875C10.5766 9.375 10.2905 9.49847 10.0795 9.71823C9.86853 9.938 9.75 10.2361 9.75 10.5469C9.75 10.8577 9.86853 11.1557 10.0795 11.3755C10.2905 11.5953 10.5766 11.7188 10.875 11.7188H13.125C13.8212 11.7188 14.4889 12.0068 14.9812 12.5196C15.4734 13.0324 15.75 13.7279 15.75 14.4531C15.75 15.1783 15.4734 15.8738 14.9812 16.3866C14.4889 16.8994 13.8212 17.1875 13.125 17.1875Z" fill="black"></path></svg><span class="text-[14px] leading-[21px] text-[#727272]">${title} ${new Date().getFullYear()}</span></div></th></tr>`
    })
    innerHtml += "</thead><tbody>"

    bodyLines.forEach((body: any) => {
      innerHtml += `<tr><td><div class='px-3 h-[38px] mt-2 flex items-center space-x-2 font-medium bg-[#f9f9f9] border-[#e4e4e4] border rounded'><span class='text-[14px] leading-[21px] text-[#727272]'>Revenue</span><span class='text-base text-black'>$${body}</span></td></tr>`
    })
    innerHtml += "</tbody>"

    const tableRoot = tooltipEl.querySelector("table")
    if (tableRoot) {
      tableRoot.innerHTML = innerHtml
    }
  }

  // Set tooltip position
  const position = chart.canvas.getBoundingClientRect()
  let width = 181
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

const BlackBarChart = () => {
  const labels: string[] = []
  for (let i = 0; i < 24; i++) {
    labels.push("")
  }
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 100) + 1),
        backgroundColor: "black",
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  )
}

const LineChart = () => {
  const labels = ["02 Feb", "03 Mar", "04 Apr", "05 May", "06 June", "07 Jul", "08 Aug"]
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 4000) + 1),
        borderColor: "black",
      },
      {
        data: labels.map(() => Math.floor(Math.random() * 4000) + 1),
        borderDash: [5, 5],
        borderColor: "black",
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        external: customLineTooltip,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 4000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  }

  return <Line height="271px" data={chartData} options={options} />
}

const DoughnutChart = () => {
  let data = [
    {
      label: "Direct",
      value: 35,
      color: "#6d6d74",
      cutout: "65%",
    },
    {
      label: "Organic",
      value: 35,
      color: "black",
      cutout: "65%",
    },
    {
      label: "Referral",
      value: 10,
      color: "#eaff00",
      cutout: "65%",
    },
    {
      label: "Social",
      value: 20,
      color: "#f2f2f2",
      cutout: "65%",
    },
  ]

  const options: any = {
    plugins: {
      responsive: true,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 26,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      centerText: {
        display: true,
        text: "28.56k",
        font: {
          size: 36,
          weight: "bold",
        },
      },
    },
    cutout: data.map((item) => item.cutout),
  }

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart: any) => {
      if (chart.config.options.plugins.centerText.display) {
        const width = chart.width
        const height = chart.height
        const ctx = chart.ctx
        ctx.restore()
        ctx.textBaseline = "middle"
        const { text, font } = chart.config.options.plugins.centerText
        ctx.font = `${font.weight} ${font.size}px sans-serif`
        const textX = Math.round((width - ctx.measureText(text).width) / 2)
        const textY = height / 2 - 20

        ctx.fillText(text, textX, textY)
        ctx.save()
      }
    },
  }

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: "white",
        borderWidth: 2.45,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  }

  return <Doughnut data={finalData} options={options} plugins={[centerTextPlugin]} />
}

const HorizontalChart = () => {
  const labels = ["United States", "Nertherlands", "Italy", "France", "Japan"]

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 100) + 1),
        backgroundColor: "black",
      },
    ],
  }

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 1,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
              ticks: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  )
}

const SmoothLineChart = () => {
  const chartData = useMemo(() => {
    const labels = ["02 Feb", "03 Mar", "04 Apr", "05 May", "06 June", "07 Jul", "08 Aug"]
    return {
      labels,
      datasets: [
        {
          label: "Users",
          data: labels.map(() => Math.floor(Math.random() * 2500) + 1),
          fill: true,
          backgroundColor: "",
          tension: 0.4,
          borderColor: "#5066f7",
        },
      ],
    }
  }, [])

  const options = {
    maintainAspectRatio: false,
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        min: 0,
        max: 2500,
        ticks: {
          stepSize: 500,
          callback: function (value: any, index: number) {
            let arr = ["0", "500", "1k", "1.5k", "2k", "2.5k"]
            return arr[index]
          },
        },
      },
    },
  }

  const chartRef = useRef(null)
  const [data, setData] = useState(chartData)

  useEffect(() => {
    const chart: any = chartRef.current
    if (chart) {
      const ctx = chart.ctx
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, "rgba(75, 192, 192, 0.7)")
      gradient.addColorStop(1, "rgba(75, 192, 192, 0)")
      const updatedData = { ...chartData }
      if (updatedData.datasets[0]) {
        updatedData.datasets[0].backgroundColor = gradient
      }
      setData(updatedData)
    }
  }, [chartRef, chartData])

  return <Line height="271px" ref={chartRef} data={data} options={options} />
}

const SalesLineChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 300) + 1),
        borderColor: "black",
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        external: customsalesTooltip,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        border: { dash: [5, 5] },
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100,
          callback: function (value: any) {
            return value + "k"
          },
        },
      },
    },
  }

  return <Line height="271px" data={chartData} options={options} />
}

export { BarChart, BlackBarChart, DoughnutChart, HorizontalChart, LineChart, SalesLineChart, SmoothLineChart }

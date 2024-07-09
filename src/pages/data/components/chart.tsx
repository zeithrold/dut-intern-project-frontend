import { Chart } from 'primereact/chart'
import React from 'react'
import type z from 'zod'
import { Skeleton } from 'primereact/skeleton'
import type { FutureDataSchema } from '@/api/future'
import { useFutureData } from '@/api/future'

const colors = [
  '--blue-500',
  '--pink-500',
  '--green-500',
  '--purple-500',
]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function DataChart({ future }: { future: string }) {
  const [chartData, setChartData] = React.useState({})
  const [chartOptions, setChartOptions] = React.useState({})
  const { isLoading, data } = useFutureData(future)

  React.useEffect(() => {
    if (isLoading || !data)
      return

    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

    function convertToChartData(data: z.infer<typeof FutureDataSchema>) {
      return {
        labels: data.labels,
        datasets: data.datasets.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          fill: false,
          borderColor: document.documentElement.style.getPropertyValue(colors[index % colors.length]),
          tension: 0.4,
        })),
      }
    }

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    }

    setChartData(convertToChartData(data))
    setChartOptions(options)
  }, [isLoading, data])

  if (isLoading || !data)
    return <Skeleton width="100%" height="20rem" />

  return (
    <Chart
      type="line"
      data={chartData}
      options={chartOptions}
      className="m-4"
    />
  )
}

import { Bar } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import dayjs from 'dayjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const labels = [
  '12am',
  '1am',
  '2am',
  '3am',
  '4am',
  '5am',
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  'noon',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
  '9pm',
  '10pm',
  '11pm',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Historical Estimate',
      data: [
        2.4, 2.2, 2.0, 1.8, 1.5, 1.2, 1.6, 3.4, 5.6, 7.1, 7.3, 7.1, 6.9, 6.6,
        5.7, 4.8, 4.1, 3.6, 3.2, 2.9, 2.7, 2.5, 2.3, 2.2,
      ],
      backgroundColor: 'rgba(99, 132, 255, 0.5)',
    },
    {
      label: 'Live',
      data: labels.map((l, idx) => {
        const hour = dayjs().hour()
        if (idx !== hour) return 0
        return 8
      }),
      backgroundColor: 'rgba(255, 132, 100, 0.9)',
    },
  ],
}

export const Barchart = () => {
  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            // display: false,
          },
          title: {
            display: false,
            text: 'not shown',
          },
        },
        scales: {
          xAxes: {
            stacked: true,
            ticks: {
              maxTicksLimit: 8,
            },
          },
        },
      }}
    />
  )
}

"use client";

import { CustomAreaChartApex } from "@/components/apex-chart/AreaChart";
import { CustomBarChartApex } from "@/components/apex-chart/BarChart";
import { CustomLineChartApex } from "@/components/apex-chart/LineChart";
import { CustomPolarChartApex } from "@/components/apex-chart/PolarChart";
import { CustomRadarChartApex } from "@/components/apex-chart/RadarChart";
import { CustomRangeChartApex } from "@/components/apex-chart/RangeChart";
import UnstyledLink from "@/components/links/UnstyledLink";

const option = {
  title: {
    text: "Basic Chart",
  },
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];

const option2 = {
  yaxis: {
    labels: {
      formatter: (val: number) => {
        return val + "°C";
      },
    },
  },
  title: {
    text: "Basic Range Chart",
  },
  chart: {
    id: "apexchart-example",
    stroke: {
      curve: "monotoneCubic",
    },
  },
  markers: {
    hover: {
      sizeOffset: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series2 = [
  {
    name: "New York Temperature",
    data: [
      {
        x: "Jan",
        y: [-2, 4],
      },
      {
        x: "Feb",
        y: [-1, 6],
      },
      {
        x: "Mar",
        y: [3, 10],
      },
      {
        x: "Apr",
        y: [8, 16],
      },
      {
        x: "May",
        y: [13, 22],
      },
      {
        x: "Jun",
        y: [18, 26],
      },
      {
        x: "Jul",
        y: [21, 29],
      },
      {
        x: "Aug",
        y: [21, 28],
      },
      {
        x: "Sep",
        y: [17, 24],
      },
      {
        x: "Oct",
        y: [11, 18],
      },
      {
        x: "Nov",
        y: [6, 12],
      },
      {
        x: "Dec",
        y: [1, 7],
      },
    ],
  },
];

const option3 = {
  title: {
    text: "Basic Polar Chart",
  },
  stroke: {
    colors: ["#fff"],
  },
  fill: {
    opacity: 0.8,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const series3 = [14, 23, 21, 17, 15, 10, 12, 17, 21];

function DashboardExamplePage() {
  return (
    <div className="grid grid-cols-1 bg-white gap-6 p-4">
      <div className="bg-slate-200 w-full h-fit p-4">
        <h1 className="text-lg font-bold">
          More Examples of Apex Charts{" "}
          <UnstyledLink
            href="https://apexcharts.com/react-chart-demos/"
            openNewTab
            className="text-blue-500 hover:underline hover:text-blue-800"
          >
            click here
          </UnstyledLink>
        </h1>
        <h1 className="text-lg font-bold">
          Apex Charts Docs{" "}
          <UnstyledLink
            href="https://apexcharts.com/docs/installation/"
            openNewTab
            className="text-blue-500 hover:underline hover:text-blue-800"
          >
            click here
          </UnstyledLink>
        </h1>
        <h1 className="text-lg font-bold text-red-600">
          The chart components have not been customized yet (they are still
          using the default settings).
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-2xl font-bold">Apex Example Charts</h1>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          <CustomLineChartApex options={option} series={series} />
          <CustomAreaChartApex options={option} series={series} />
          <CustomBarChartApex options={option} series={series} />
          <CustomRadarChartApex options={option} series={series} />
          <CustomPolarChartApex options={option3} series={series3} />
          <CustomRangeChartApex options={option2} series={series2} />
        </div>
      </div>
    </div>
  );
}

export default DashboardExamplePage;

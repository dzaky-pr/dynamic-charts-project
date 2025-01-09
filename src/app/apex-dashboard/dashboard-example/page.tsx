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
          <CustomPolarChartApex options={option} series={series} />
          <CustomRangeChartApex options={option} series={series} />
        </div>
      </div>
    </div>
  );
}

export default DashboardExamplePage;

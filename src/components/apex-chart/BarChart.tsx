"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomBarChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomBarChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomBarChartApexProps) {
  // const option = {
  //   title: {
  //     text: "Basic Bar Chart",
  //   },
  //   chart: {
  //     id: "apexchart-example",
  //   },
  //   xaxis: {
  //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //   },
  // };

  // const series = [
  //   {
  //     name: "series-1",
  //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  //   },
  // ];

  return (
    <>
      <ApexChart
        type="bar"
        options={options}
        series={series}
        height={height}
        width={width}
      />
    </>
  );
}

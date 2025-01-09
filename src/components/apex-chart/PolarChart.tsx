"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomPolarChartApexProps {
  options: ApexCharts.ApexOptions;
  series: number[];
  height?: number;
  width?: number;
}

export function CustomPolarChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomPolarChartApexProps) {
  // const options = {
  //   title: {
  //     text: "Basic Polar Chart",
  //   },
  //   stroke: {
  //     colors: ["#fff"],
  //   },
  //   fill: {
  //     opacity: 0.8,
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 480,
  //       options: {
  //         chart: {
  //           width: 200,
  //         },
  //         legend: {
  //           position: "bottom",
  //         },
  //       },
  //     },
  //   ],
  // };

  // const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  return (
    <ApexChart
      type="polarArea"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
}

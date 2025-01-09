"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomRangeChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomRangeChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomRangeChartApexProps) {
  //   const option = {
  //     yaxis: {
  //       labels: {
  //         formatter: (val: number) => {
  //           return val + "°C";
  //         },
  //       },
  //     },
  //     title: {
  //       text: "Basic Range Chart",
  //     },
  //     chart: {
  //       id: "apexchart-example",
  //       stroke: {
  //         curve: "monotoneCubic",
  //       },
  //     },
  //     markers: {
  //       hover: {
  //         sizeOffset: 5,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     xaxis: {
  //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //     },
  //   };

  //   const series = [
  //     {
  //       name: "New York Temperature",
  //       data: [
  //         {
  //           x: "Jan",
  //           y: [-2, 4],
  //         },
  //         {
  //           x: "Feb",
  //           y: [-1, 6],
  //         },
  //         {
  //           x: "Mar",
  //           y: [3, 10],
  //         },
  //         {
  //           x: "Apr",
  //           y: [8, 16],
  //         },
  //         {
  //           x: "May",
  //           y: [13, 22],
  //         },
  //         {
  //           x: "Jun",
  //           y: [18, 26],
  //         },
  //         {
  //           x: "Jul",
  //           y: [21, 29],
  //         },
  //         {
  //           x: "Aug",
  //           y: [21, 28],
  //         },
  //         {
  //           x: "Sep",
  //           y: [17, 24],
  //         },
  //         {
  //           x: "Oct",
  //           y: [11, 18],
  //         },
  //         {
  //           x: "Nov",
  //           y: [6, 12],
  //         },
  //         {
  //           x: "Dec",
  //           y: [1, 7],
  //         },
  //       ],
  //     },
  //   ];

  return (
    <>
      <ApexChart
        type="rangeArea"
        options={options}
        series={series}
        height={height}
        width={width}
      />
    </>
  );
}

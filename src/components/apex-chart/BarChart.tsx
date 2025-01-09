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

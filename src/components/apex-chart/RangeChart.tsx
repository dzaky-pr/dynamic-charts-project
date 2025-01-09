"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomRangeChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: Array<{ x: string; y: number[] }>;
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

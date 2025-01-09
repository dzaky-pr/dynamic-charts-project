"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomAreaChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomAreaChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomAreaChartApexProps) {
  return (
    <>
      <ApexChart
        type="area"
        options={options}
        series={series}
        height={height}
        width={width}
      />
    </>
  );
}

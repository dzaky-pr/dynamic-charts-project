"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomRadarChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomRadarChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomRadarChartApexProps) {
  return (
    <>
      <ApexChart
        type="radar"
        options={options}
        series={series}
        height={height}
        width={width}
      />
    </>
  );
}

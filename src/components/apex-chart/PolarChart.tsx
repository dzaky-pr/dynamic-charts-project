"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomPolarChartApexProps {
  options: ApexCharts.ApexOptions; // Import proper types from ApexCharts if available
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomPolarChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomPolarChartApexProps) {
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

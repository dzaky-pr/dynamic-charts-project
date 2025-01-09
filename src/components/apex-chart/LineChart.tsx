"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CustomLineChartApexProps {
  options: ApexCharts.ApexOptions;
  series: Array<{
    name: string;
    data: number[];
  }>;
  height?: number;
  width?: number;
}

export function CustomLineChartApex({
  options,
  series,
  height = 400,
  width = 500,
}: CustomLineChartApexProps) {
  return (
    <>
      <ApexChart
        type="line"
        options={options}
        series={series}
        height={height}
        width={width}
      />
    </>
  );
}

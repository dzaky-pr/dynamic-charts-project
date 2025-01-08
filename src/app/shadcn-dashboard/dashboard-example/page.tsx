"use client";

import { CustomAreaChartShadcn } from "@/components/shadcn-chart/AreaChart";
import { CustomBarChartShadcn } from "@/components/shadcn-chart/BarChart";
import { CustomLineChartShadcn } from "@/components/shadcn-chart/LineChart";
import { CustomPieChartShadcn } from "@/components/shadcn-chart/PieChart";
import { CustomRadarChartShadcn } from "@/components/shadcn-chart/RadarChart";
import { CustomRadialChartShadcn } from "@/components/shadcn-chart/RadialChart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const chartData2 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig2 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

const chartData3 = [
  { hari: "Senin", desktop: 186 },
  { hari: "Selasa", desktop: 305 },
  { hari: "Rabu", desktop: 237 },
  { hari: "Kamis", desktop: 73 },
  { hari: "Jumat", desktop: 209 },
  { hari: "Sabtu", desktop: 214 },
  { hari: "Minggu", desktop: 334 },
];

const chartConfig4 = {
  desktop: {
    label: "Bulan",
    color: "hsl(var(--chart-1))",
  },
};

const chartConfig3 = {
  desktop: {
    label: "Makanan",
    color: "hsl(var(--chart-1))",
  },
};

function DashboardExamplePage() {
  return (
    <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-6 p-4">
      {/* Kolom 1 */}
      <CustomAreaChartShadcn
        type="natural"
        data={chartData}
        chartConfig={chartConfig4}
        showLegend={true}
        xAxisKey="month" // Use "month" as xAxisKey
        chartTitle="Natural Area Chart"
        chartDesc="Example of natural area chart description"
      />
      {/* Kolom 2 */}
      {/* Example for different data structure */}
      <CustomAreaChartShadcn
        type="linear"
        data={chartData3}
        chartConfig={chartConfig3}
        showLegend={true}
        xAxisKey="hari" // Use "browser" as xAxisKey
        chartTitle="Linear Area Chart"
        chartDesc="Example of linear area chart description"
      />

      {/* Kolom 3 */}
      <CustomAreaChartShadcn
        type="step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        xAxisKey="month"
        chartTitle="Step Area Chart"
        chartDesc="Example of step area chart description"
      />

      {/* Bar Chart - Horizontal */}
      <CustomBarChartShadcn
        data={chartData}
        chartConfig={chartConfig}
        layout="horizontal"
        showLegend={true}
        axisKey="month"
        chartTitle="Horizontal Bar Chart"
        chartDesc="Example of horizontal bar chart description"
      />
      {/* Bar Chart - Vertical */}
      <CustomBarChartShadcn
        data={chartData3}
        chartConfig={chartConfig3}
        layout="vertical"
        showLegend={true}
        axisKey="hari"
        chartTitle="Vertical Bar Chart"
        chartDesc="Example of vertical bar chart description"
      />

      {/* Kolom 1 */}
      <CustomLineChartShadcn
        chartType="natural" // Bisa juga "linear", "step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        chartTitle="Natural Line Chart"
        chartDesc="Example of natural line chart description"
        showDots={true}
        xAxisKey="month"
      />

      {/* Kolom 2 */}
      <CustomLineChartShadcn
        chartType="linear"
        data={chartData3}
        chartConfig={chartConfig3}
        showLegend={true}
        chartTitle="Linear Line Chart"
        chartDesc="Example of linear line chart description"
        showDots={true}
        xAxisKey="hari"
      />

      {/* Kolom 3 */}
      <CustomLineChartShadcn
        chartType="step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        chartTitle="Step Line Chart"
        chartDesc="Example of step line chart description"
        showDots={true}
        xAxisKey="month"
      />

      <CustomPieChartShadcn
        chartData={chartData2}
        chartConfig={chartConfig2}
        chartType="pie"
        showLegend={true}
        showLabel={true}
        dataKey="visitors"
        nameKey="browser"
        chartTitle="Pie Chart"
        chartDesc="Example of pie chart description"
      />
      <CustomPieChartShadcn
        chartData={chartData2}
        chartConfig={chartConfig2}
        chartType="donut"
        showLegend={true}
        showLabel={true}
        dataKey="visitors"
        nameKey="browser"
        chartTitle="Donut Chart"
        chartDesc="Example of donut chart description"
      />

      {/* Kolom Radar */}
      <CustomRadarChartShadcn
        chartData={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        showDots={true}
        dataKey="month"
        chartTitle="Radar Chart"
        chartDesc="Example of radar chart description"
      />

      {/* Kolom Radar */}
      <CustomRadarChartShadcn
        chartData={chartData3}
        chartConfig={chartConfig3}
        showLegend={true}
        showDots={true}
        dataKey="hari"
        chartTitle="Radar Chart"
        chartDesc="Example of radar chart description"
      />

      <CustomRadialChartShadcn
        chartConfig={chartConfig2}
        chartData={chartData2}
        dataKey="visitors"
        nameKey="browser"
        chartTitle="Radial Chart"
        chartDesc="Example of radial chart description"
      />

      <CustomRadialChartShadcn
        chartConfig={chartConfig2}
        chartData={chartData2}
        dataKey="visitors"
        nameKey="browser"
        chartTitle="Radial Chart with Labels"
        chartDesc="Example of radial chart with labels description"
        showLabels
      />
    </div>
  );
}

export default DashboardExamplePage;

import { CustomAreaChart } from "@/components/charts/AreaChart";
import { CustomBarChart } from "@/components/charts/BarChart";
import { CustomLineChart } from "@/components/charts/LineChart";
import { CustomPieChart } from "@/components/charts/PieChart";
import { CustomRadarChart } from "@/components/charts/RadarChart";
import { CustomRadialChart } from "@/components/charts/RadialChart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  // other: {
  //   label: "Other",
  //   color: "hsl(var(--chart-3))",
  // },
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

function DashboardPage() {
  return (
    <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-6 p-6">
      {/* Kolom 1 */}
      <CustomAreaChart
        type="natural" // Bisa juga "linear", "step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
      />
      {/* Kolom 2 */}
      <CustomAreaChart
        type="linear"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
      />
      {/* Kolom 3 */}
      <CustomAreaChart
        type="step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
      />
      {/* Bar Chart - Horizontal */}
      <CustomBarChart
        data={chartData}
        chartConfig={chartConfig}
        layout="horizontal"
        showLegend={true}
      />
      {/* Bar Chart - Vertical */}
      <CustomBarChart
        data={chartData}
        chartConfig={chartConfig}
        layout="vertical"
        showLegend={true}
      />

      {/* Kolom 1 */}
      <CustomLineChart
        chartType="natural" // Bisa juga "linear", "step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        title="Traffic Analysis"
        description="Showing the traffic trend over the last 6 months"
        showDots={true}
      />
      {/* Kolom 2 */}
      <CustomLineChart
        chartType="linear"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        title="Traffic Analysis"
        description="Showing the traffic trend over the last 6 months"
        showDots={true}
      />
      {/* Kolom 3 */}
      <CustomLineChart
        chartType="step"
        data={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        title="Traffic Analysis"
        description="Showing the traffic trend over the last 6 months"
        showDots={true}
      />

      <CustomPieChart
        chartData={chartData2}
        chartConfig={chartConfig2}
        chartType="pie"
        showLegend={true}
        showLabel={true}
      />
      <CustomPieChart
        chartData={chartData2}
        chartConfig={chartConfig2}
        chartType="donut"
        showLegend={true}
        showLabel={true}
      />

      {/* Kolom Radar */}
      <CustomRadarChart
        chartData={chartData}
        chartConfig={chartConfig}
        showLegend={true}
        showDots={true}
      />

      <CustomRadialChart
        chartConfig={chartConfig2}
        chartData={chartData2}
        showLegend={true}
      />
    </div>
  );
}

export default DashboardPage;

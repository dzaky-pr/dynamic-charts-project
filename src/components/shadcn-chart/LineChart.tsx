"use client";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

interface CustomLineChartProps {
  chartType?: "linear" | "step" | "monotone" | "natural";
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: Array<Record<string, any>>;
  chartConfig: Record<string, { label: string; color: string }>;
  showDots?: boolean;
  showLegend?: boolean;
  xAxisKey: string;
  chartTitle: string;
  chartDesc: string;
}

export function CustomLineChartShadcn({
  data,
  chartConfig,
  chartType = "linear",
  showDots = false,
  showLegend = false,
  xAxisKey,
  chartTitle,
  chartDesc,
}: CustomLineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data} // Using data from props instead of chartData
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {showLegend && <ChartLegend content={<ChartLegendContent />} />}
            {Object.keys(chartConfig).map((key) => (
              <Line
                key={key}
                dataKey={key}
                type={chartType}
                stroke={chartConfig[key].color}
                strokeWidth={2}
                dot={showDots ? { fill: chartConfig[key].color } : false}
                activeDot={showDots ? { r: 6 } : undefined}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}

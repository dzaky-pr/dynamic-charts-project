"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface CustomBarChartProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: Array<Record<string, any>>;
  chartConfig: Record<string, { label: string; color: string }>;
  layout?: "horizontal" | "vertical"; // Default "horizontal"
  showLegend?: boolean;
  axisKey: string;
  chartTitle: string;
  chartDesc: string;
}

export function CustomBarChartShadcn({
  data,
  chartConfig,
  layout = "horizontal",
  showLegend = false,
  axisKey,
  chartTitle,
  chartDesc,
}: CustomBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={data}
            layout={layout}
            margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={layout === "horizontal" ? axisKey : undefined}
              type={layout === "horizontal" ? "category" : "number"}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              type={layout === "horizontal" ? "number" : "category"}
              dataKey={layout === "horizontal" ? undefined : axisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            {showLegend && <ChartLegend content={<ChartLegendContent />} />}
            {Object.keys(chartConfig).map((key) => (
              <Bar
                key={key}
                dataKey={key}
                fill={chartConfig[key].color}
                radius={layout === "horizontal" ? [4, 4, 0, 0] : [0, 4, 4, 0]}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

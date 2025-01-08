"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, PolarGrid, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type CustomRadialChartProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartData: Array<Record<string, any>>;
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
  chartTitle: string;
  chartDesc: string;
  showLabels?: boolean;
};

export function CustomRadialChartShadcn({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
  chartTitle,
  chartDesc,
  showLabels = false,
}: CustomRadialChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDesc}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey={nameKey} />}
            />
            <PolarGrid gridType="circle" />

            <RadialBar dataKey={dataKey} background>
              {showLabels && (
                <LabelList
                  position="insideStart"
                  dataKey="browser"
                  className="fill-white capitalize mix-blend-luminosity"
                  fontSize={11}
                />
              )}
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
